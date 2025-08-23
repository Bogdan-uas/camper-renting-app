const vehicleTypeMap = {
    "Van": ["van", "panelTruck"],
    "Fully Integrated": ["fullyIntegrated"],
    "Alcove": ["alcove"]
};

export const filterCampers = (campers, filters) => {
    const { location, equipment, vehicleType } = filters;

    return campers.filter(c => {
        if (location && !c.location.toLowerCase().includes(location.toLowerCase())) {
            return false;
        }

        if (equipment.length > 0) {
            const allMatch = equipment.every(eq => {
                switch (eq) {
                    case "AC":
                        return c.AC === true;
                    case "Automatic":
                        return c.transmission?.toLowerCase() === "automatic";
                    case "Kitchen":
                        return c.kitchen === true;
                    case "TV":
                        return c.TV === true;
                    case "Bathroom":
                        return c.bathroom === true;
                    default:
                        return false;
                }
            });
            if (!allMatch) return false;
        }

        if (vehicleType) {
            const allowedForms = vehicleTypeMap[vehicleType] || [];
            if (!allowedForms.includes(c.form)) return false;
        }

        return true;
    });
};
import React, { useContext } from "react";
import MeasurementSystemContext from '../../../MeasurementSystemContext';
import { Switch, FormControlLabel } from "@material-ui/core";

function MSystemSwitch() {
    const { measurementSystem, toggleMeasurementSystem } = useContext(MeasurementSystemContext)

    return (
        <FormControlLabel
            control={<Switch onChange={toggleMeasurementSystem} />}
            label={measurementSystem}
        />
    );
}

export default MSystemSwitch;

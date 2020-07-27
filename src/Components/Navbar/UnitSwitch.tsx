import React from "react";
import { Switch, FormControlLabel } from "@material-ui/core";
interface Props {
    units: string;
    changeUnitsFunc: any;
}

function UnitSwitch(props: Props) {
    const { units, changeUnitsFunc } = props;

    return (
        <FormControlLabel
            data-testid="theme-checkbox"
            control={<Switch onChange={changeUnitsFunc} />}
            label={units}
        />
    );
}

export default UnitSwitch;

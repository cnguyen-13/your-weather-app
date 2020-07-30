import React from "react";
import { Switch, FormControlLabel } from "@material-ui/core";
interface Props {
    mSystem: string;
    mSystemToggleFunc: any;
}

function UnitSwitch(props: Props) {
    const { mSystem, mSystemToggleFunc } = props;

    return (
        <FormControlLabel
            className="temp-switcher"
            data-testid="theme-checkbox"
            control={<Switch onChange={mSystemToggleFunc} />}
            label={mSystem}
        />
    );
}

export default UnitSwitch;

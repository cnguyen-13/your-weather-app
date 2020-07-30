import React from "react";
import { Switch, FormControlLabel } from "@material-ui/core";

interface Props {
    mSystem: string;
    mSystemToggleFunc: any;
}

function MSystemSwitch(props: Props) {
    const { mSystem, mSystemToggleFunc } = props;

    return (
        <FormControlLabel
            control={<Switch onChange={mSystemToggleFunc} />}
            label={mSystem}
        />
    );
}

export default MSystemSwitch;

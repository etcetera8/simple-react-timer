import React from 'react';
import Timer, { Props } from './timer';

import { render, fireEvent, waitForElement } from '@testing-library/react';

function renderTimer(props: Partial<Props> = {}) {
    const defaultProps: Props = {
        startDate: Date.now(),
        timerOn: false,
        seconds: 0,
    }
    return render(<Timer {...defaultProps} {...props}/>)
}

describe("<Timer />", () => {
    test("should display a timer", async() => {
        const { findByTestId } = renderTimer();
        const timer = await findByTestId("reactSimpleTimer");

        expect(timer).toHaveClass('react-simple-timer-wrap');
    })
})
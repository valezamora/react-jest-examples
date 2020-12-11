import { render, screen } from '@testing-library/react';
import React from "react";
import ProfileDetails from "./profileDetails";

test('Display complete profile details', async () => {
    // arrange
    const testData = {
        name: 'Valeria',
        email: 'valezamora@gmail.com'
    };

    // act
    render(<ProfileDetails data={testData} />);

    // assert
    expect(screen.getByText(`Name: ${testData.name}`)).toHaveTextContent(`Name: ${testData.name}`);
    expect(screen.getByText(`Email: ${testData.email}`)).toHaveTextContent(`Email: ${testData.email}`);
});

test('Given undefined email, dont display it', async () => {
    // arrange
    const testData = {
        name: 'Valeria'
    };

    // act
    render(<ProfileDetails data={testData} />);

    // assert
    expect(screen.getByText(`Name: ${testData.name}`)).toHaveTextContent(`Name: ${testData.name}`);
    expect(screen.queryByText(/Email: /i)).toBeFalsy();
});

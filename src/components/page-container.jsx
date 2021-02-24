import React from 'react';
import Shuffler from './shuffler';
import Title from './title';

export default function PageContainer() {
    return (
        <div className="page-container">
            <Title />
            <Shuffler />
        </div>
    )
}
import React from 'react';
import Logo from '../components/Logo';
import ServiceFinancier from '../components/ServiceFinancier';
import ServiceMonétique from '../components/ServiceMonétique';
import ServicePostaux from '../components/ServicePostaux';

const ServiceClient = () => {
    return (
        <div classname="serviceClient">
            <Logo></Logo>
            <ServiceFinancier></ServiceFinancier> <br></br>
            <ServiceMonétique></ServiceMonétique><br></br>
            <ServicePostaux></ServicePostaux>
        </div>
    );
};

export default ServiceClient;
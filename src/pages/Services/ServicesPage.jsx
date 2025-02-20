import React, { useState, useEffect } from "react";
import { projects } from "../../constants";
import { useParams } from "react-router-dom";
import { servicesStyles } from "../../style";

const ServiceDetails = ({ service }) => {
    if (!service) {
        return (
            <div className={servicesStyles.emptyStateContainer}>
                <p className={servicesStyles.emptyStateText}>Select a service to view details</p>
            </div>
        );
    }

    return (
        <div className={servicesStyles.detailsContainer}>
            <div className={servicesStyles.imageContainer}>
                <img 
                    src={service.image}
                    alt={service.name}
                    className={servicesStyles.image}
                />
            </div>
            <h1 className={servicesStyles.title}>
                {service.name}
            </h1>
            <p className={servicesStyles.description}>
                {service.description}
            </p>
            <div className={servicesStyles.tagsContainer}>
                {service.tags.map((tag) => (
                    <span key={tag.name} className={servicesStyles.tag}>
                        #{tag.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

const ServiceCard = ({ project, index, isSelected, onClick }) => {
    return (
        <div 
            onClick={() => onClick(index)}
            className={servicesStyles.serviceCard.container(isSelected)}
        >
            <div className={servicesStyles.serviceCard.imageWrapper}>
                <img 
                    src={project.image}
                    alt={project.name}
                    className={servicesStyles.serviceCard.image}
                />
            </div>
            <div className={servicesStyles.serviceCard.contentWrapper}>
                <h3 className={servicesStyles.serviceCard.title}>
                    {project.name}
                </h3>
                <p className={servicesStyles.serviceCard.description}>
                    {project.description}
                </p>
            </div>
        </div>
    );
};

const ServicesPage = () => {
    const { id } = useParams();
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        if (id) {
            setSelectedService(projects[id]);
        }
    }, [id]);

    const handleServiceClick = (id) => {
        setSelectedService(projects[id]);
    };

    return (
        <div className={servicesStyles.pageLayout.container}>
            <div className={servicesStyles.pageLayout.mainContent}>
                <ServiceDetails service={selectedService} />
            </div>

            <div className={servicesStyles.pageLayout.sidebar}>
                {projects.map((project, index) => (
                    <ServiceCard
                        key={`project-${index}`}
                        project={project}
                        index={index}
                        isSelected={selectedService === project}
                        onClick={handleServiceClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;

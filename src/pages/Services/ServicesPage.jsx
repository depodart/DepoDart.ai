import React, { useState, useEffect } from "react";
import { projects } from "../../constants";
import { useParams } from "react-router-dom";

const ServiceDetails = ({ service }) => {
    if (!service) {
        return (
            <div className="flex items-center justify-center h-[400px] bg-background-secondary-dark dark:bg-background-tertiary-dark rounded-lg border-secondary-dark">
                <p className="text-primary-light">Select a service to view details</p>
            </div>
        );
    }

    return (
        <div className="mb-8 bg-tertiary-dark">
            <div className="w-full aspect-video rounded-lg overflow-hidden">
                <img 
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <h1 className="text-2xl font-bold mt-4 text-secondary-dark dark:text-tertiary-light">
                {service.name}
            </h1>
            <p className="mt-2 text-primary-dark dark:text-primary-light">
                {service.description}
            </p>
            <div className="flex gap-2 mt-4">
                {service.tags.map((tag) => (
                    <span key={tag.name} className={`px-2 py-1 rounded  text-primary-light`}>
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
            className={`
                flex gap-4 p-4 rounded-lg cursor-pointer transition-colors duration-200
                ${isSelected ? 
                    'bg-background-secondary-dark dark:bg-background-tertiary-dark border-2 border-secondary-dark' : 
                    'hover:bg-background-secondary-dark hover:dark:bg-background-tertiary-dark'
                }
            `}
        >
            <div className="w-40 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col">
                <h3 className="font-medium text-secondary-dark dark:text-tertiary-light">
                    {project.name}
                </h3>
                <p className="text-sm text-primary-dark dark:text-primary-light line-clamp-2">
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
        <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content Area - Takes 2/3 width on desktop */}
            <div className="md:w-2/3">
                <ServiceDetails service={selectedService} />
            </div>

            {/* Sidebar - Takes 1/3 width on desktop */}
            <div className="md:w-1/3 space-y-4">
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

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { worksStyles } from "../../style";
import { useParams } from "react-router-dom";

const ServiceCard = ({ id, name, description, tags, image, onClick, isSelected }) => {
    return (
        <motion.div 
            variants={fadeIn("up", "spring")} 
            onClick={() => onClick(id)}
            className={`relative ${isSelected ? 'z-20' : 'z-10'}`}
        >
            <div className={`${worksStyles.projectCard.wrapper} cursor-pointer`}>
                <div className={worksStyles.projectCard.imageContainer}>
                    <img
                        src={image}
                        alt={name}
                        className={worksStyles.projectCard.image}
                    />
                </div>
                <div className="mt-5">
                    <h3 className={worksStyles.projectCard.title}>{name}</h3>
                    <p className={worksStyles.projectCard.description}>{description}</p>
                </div>
                <div className={worksStyles.projectCard.tagsContainer}>
                    {tags.map((tag) => (
                        <p key={tag.name} className={`${worksStyles.projectCard.tag} ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ServiceDetail = ({ project, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30"
            onClick={onClose}
        >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-2xl w-full m-4" onClick={e => e.stopPropagation()}>
                <div className={worksStyles.projectCard.imageContainer}>
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

                <div className="mt-8">
                    <h2 className={worksStyles.projectCard.title}>{project.name}</h2>
                    <p className={`${worksStyles.projectCard.description} mt-4`}>
                        {project.description}
                    </p>
                </div>

                <div className={`${worksStyles.projectCard.tagsContainer} mt-6`}>
                    {project.tags.map((tag) => (
                        <p key={tag.name} className={`${worksStyles.projectCard.tag} ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>

                <button 
                    onClick={onClose}
                    className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Close
                </button>
            </div>
        </motion.div>
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

    const handleClose = () => {
        setSelectedService(null);
    };

    return (
        <>
            <div className={worksStyles.mainContent.projectsGrid}>
                {projects.map((project, index) => (
                    <ServiceCard
                        key={`project-${index}`}
                        {...project}
                        id={index}
                        onClick={handleServiceClick}
                        isSelected={selectedService === project}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedService && (
                    <ServiceDetail 
                        project={selectedService}
                        onClose={handleClose}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default ServicesPage;

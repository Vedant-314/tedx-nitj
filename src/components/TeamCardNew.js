import React, { useState } from 'react';

// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import * as faIcons1 from '@fortawesome/free-solid-svg-icons';
import * as faIcons2 from '@fortawesome/free-brands-svg-icons';
// import 

// Components
import { CardContainer, Common, CardBack, ImageContainer, Content, LinkContainer } from './styles';
// import { Heading3, Para2, Para1 } from '..';

const faIcons = {
    ...faIcons1,
    ...faIcons2,
};

export const TeamCardNew = ({
    name,
    description,
    speakerImage,
    isLongCard,
    isPublished,
}) => {
    const [front, setFront] = useState(true);
    const [card, setCard] = useState('card');

    const onClick = () => {
        const css = front ? 'card isFlipped' : 'card';
        setCard(css);
        setFront((current) => !current);
    };

    const image = speakerImage ;

    return (
        <CardContainer isPublished={isPublished} isLongCard={isLongCard}>
            <div className={card}>
                <Common>
                    <ImageContainer isLongCard={isLongCard} isPublished={isPublished} image={image} />

                    {isPublished && (
                        <>
                            <p className='name'>{name}</p>
                            {/* <Para2 className='content'>{shortDescription}</Para2> */}
                            <FontAwesomeIcon
                                icon={faInfoCircle}
                                className='flipButton'
                                onClick={onClick}
                                onKeyDown={onClick}
                            />
                        </>
                    )}
                </Common>

                <CardBack>
                    <Content>
                        <h1 className='authorName'>{name} </h1>
                        <p className='description'>
                            {description.map((desc) =>
                                typeof desc === 'string' ? (
                                    <span key={desc}>{desc} </span>
                                ) : (
                                    <a
                                        className='link'
                                        key={`${desc.href}-${desc.content}`}
                                        href={desc.href}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {desc.content}
                                    </a>
                                ),
                            )}
                        </p>
                    </Content>

                    {/* <LinkContainer>
                        {links.map(({ link, icon }) => (
                            <a key={link} href={link} target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon className='icon' icon={faIcons[icon]} />
                            </a>
                        ))}
                    </LinkContainer> */}

                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        className='flipButton'
                        onClick={onClick}
                        onKeyDown={onClick}
                    />
                </CardBack>
            </div>
        </CardContainer>
    );
};



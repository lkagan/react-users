import classes from './Card.module.css';

const Card = ({children, className: parentClasses}) => {
    return <div className={` ${classes.card} ${parentClasses}`}>{children}</div>;
}

export default Card;
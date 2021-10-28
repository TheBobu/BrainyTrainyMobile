import './Card.css';
type Props = {
    className: string;
}

const Card: React.FC<Props> = (props) => {
    const classes = 'card ' + props.className;
    return (<div className={classes}>{props.children}</div>);
}

export default Card;
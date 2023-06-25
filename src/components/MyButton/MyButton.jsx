import PropTypes from 'prop-types';
import './MyButton.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({primary, backgroundColor, radius, size, label, ...props}) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={
                (backgroundColor && {backgroundColor},
                radius ? {borderRadius: radius + 'em'} : {borderRadius: 0})
            }
            {...props} // js 문법에서 나머지 매개 변수라고 함 <Button a,b,c 외 d, e /> (REST parameter)
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * MyButton contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,

    radius: PropTypes.string,
};

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
    radius: null,
};

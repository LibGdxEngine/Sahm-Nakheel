const LineSeparator = ({ color = 'black', thickness = 1, width = '100%', margin = '20px auto' }) => {
    const styles = {
        border: `none`,
        borderTop: `${thickness}px solid ${color}`,
        width: width,
        margin: margin
    };

    return <hr style={styles} />;
};

export default LineSeparator;
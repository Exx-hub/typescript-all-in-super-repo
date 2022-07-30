type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

function Status(props: StatusProps) {
    const { status } = props;

    let message;
    if (status === 'loading') {
        message = message = 'Loading';
    } else if (status === 'success') {
        message = 'Data fetched successfully.'
    } else if (status === 'error') {
        message = 'Error fetching data.'
    }

    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}

export default Status
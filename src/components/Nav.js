function Nav(props) {
    const getTitles = () => {
        const result = [];

        for (let i = 0; i < props.contents.length; i++) {
            result.push(
                <li key={props.contents[i].id}>
                    <a href={"/read/" + props.contents[i].id} onClick={event => {
                        event.preventDefault();
                        props.setSelectedID(props.contents[i].id);
                        props.setSelectedController(null);
                    }}>{props.contents[i].title}</a>
                </li>
            );
        }

        return result;
    }

    return <nav>
        <ol>
            {getTitles()}
        </ol>
    </nav>
}

export default Nav;
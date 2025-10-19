import classes from './Header.module.scss';

export const Header = () => {
    return (
        <>
        <header className={classes.header}>
            <div className={classes.container}>
                <a className='a' href="/">ToDo</a>
            </div>
        </header>
        </>
    );
};

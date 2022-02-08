import './../css/PageBlock/PageBlock.css';
// import signInLogo from './../images/sign-in-icon.png';
// import signUpLogo from './../images/sign-up-icon.png';

function PageBlock() {
    return (
        <div className="page-block">
            <div className="container">
                <div className="page-block-wrapper">
                    <nav className="nav">
                        <ul className="nav-list">
                            <li><a><span className='sign-in-logo'></span><h3 className='sign-in-title'>Sign In</h3></a></li>
                            <li><a><span className='sign-up-logo'></span><h3 className='sign-up-title'>Sign Up</h3></a></li>
                        </ul>
                    </nav>
                    <main className="main">
                        <div className='title-wrapper'>
                            <h3>If you want to create any post, you need to be authorized</h3>
                            <h1>Posts line</h1>
                        </div>
                        <ul className="posts-list">

                            <li className="post">
                                <div className="post-author">
                                    <span className="author-img"></span>
                                    <h3>Sasha Vysotski</h3>
                                </div>
                                <div className="post-content">
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                                        In in tristique urna.</p>
                                </div>
                                <div className="post-controllers">
                                    <button><span className="like-icon"></span></button>
                                    <button><span className="comment-icon"></span></button>
                                    <button><span className="bookmark-icon"></span></button>
                                </div>
                            </li>

                            <li className="post">
                                <div className="post-author">
                                    <span className="author-img"></span>
                                    <h3>Artem Kasabuka</h3>
                                </div>
                                <div className="post-content">
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                                        In in tristique urna.</p>
                                </div>
                                <div className="post-controllers">
                                    <button><span className="like-icon"></span></button>
                                    <button><span className="comment-icon"></span></button>
                                    <button><span className="bookmark-icon"></span></button>
                                </div>
                            </li>

                            <li className="post">
                                <div className="post-author">
                                    <span className="author-img"></span>
                                    <h3>Pasha Motuz</h3>
                                </div>
                                <div className="post-content">
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                                        In in tristique urna.</p>
                                </div>
                                <div className="post-controllers">
                                    <button><span className="like-icon"></span></button>
                                    <button><span className="comment-icon"></span></button>
                                    <button><span className="bookmark-icon"></span></button>
                                </div>
                            </li>

                            <li className="post">
                                <div className="post-author">
                                    <span className="author-img"></span>
                                    <h3>Ksenia Malishevskaya</h3>
                                </div>
                                <div className="post-content">
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                                        In in tristique urna.</p>
                                </div>
                                <div className="post-controllers">
                                    <button><span className="like-icon"></span></button>
                                    <button><span className="comment-icon"></span></button>
                                    <button><span className="bookmark-icon"></span></button>
                                </div>
                            </li>

                            <li className="post">
                                <div className="post-author">
                                    <span className="author-img"></span>
                                    <h3>Elena Samoilenko</h3>
                                </div>
                                <div className="post-content">
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                                        In in tristique urna.</p>
                                </div>
                                <div className="post-controllers">
                                    <button><span className="like-icon"></span></button>
                                    <button><span className="comment-icon"></span></button>
                                    <button><span className="bookmark-icon"></span></button>
                                </div>
                            </li>

                            <li className="post">
                                <div className="post-author">
                                    <span className="author-img"></span>
                                    <h3>Kostya Bykovskih</h3>
                                </div>
                                <div className="post-content">
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                                        In in tristique urna.</p>
                                </div>
                                <div className="post-controllers">
                                    <button><span className="like-icon"></span></button>
                                    <button><span className="comment-icon"></span></button>
                                    <button><span className="bookmark-icon"></span></button>
                                </div>
                            </li>

                            <li className="post">
                                <div className="post-author">
                                    <span className="author-img"></span>
                                    <h3>Nikita Glinistiy</h3>
                                </div>
                                <div className="post-content">
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                                        In in tristique urna.</p>
                                </div>
                                <div className="post-controllers">
                                    <button><span className="like-icon"></span></button>
                                    <button><span className="comment-icon"></span></button>
                                    <button><span className="bookmark-icon"></span></button>
                                </div>
                            </li>

                            <li className="post">
                                <div className="post-author">
                                    <span className="author-img"></span>
                                    <h3>Kirill Yarockiy</h3>
                                </div>
                                <div className="post-content">
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                                        In in tristique urna.</p>
                                </div>
                                <div className="post-controllers">
                                    <button><span className="like-icon"></span></button>
                                    <button><span className="comment-icon"></span></button>
                                    <button><span className="bookmark-icon"></span></button>
                                </div>
                            </li>
                        </ul>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default PageBlock;
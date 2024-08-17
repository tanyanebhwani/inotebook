import React from 'react'

const Blog = () => {
    return (
        <div class="blog-content">
            <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-blue">
                <div class="col-lg-6 px-0">
                    <h1 class="display-4 fst-italic">5 Reasons to Switch to Cloud</h1>
                    <p class="lead my-3"> we discuss the advantages of using a cloud-based note-taking app like iNotebook. Learn how cloud storage offers seamless access to your notes from any device, ensures data security, and eliminates the need for manual backups.</p>
                    <p class="lead mb-0"><a href="#" class="text-body-emphasis fw-bold">Continue reading...</a></p>
                </div>
            </div>
        <div className="blog-container">
            <div class="row mb-2 blog-section-2">
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="blog-item col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary-emphasis">Productivity Tips</strong>
                            <h3 class="blog-head mb-0">Maximize Your Productivity</h3>
                            <div class="mb-1 text-body-secondary">Nov 12</div>
                            <p class="card-text mb-auto">Discover how iNotebook can help you stay organized and boost your productivity.</p>
                            <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                                Continue reading
                                <svg class="bi"><use href="#chevron-right"></use></svg>
                            </a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="blog-item col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-success-emphasis">Design</strong>
                            <h3 class="mb-0">Never Lose a Note Again</h3>
                            <div class="mb-1 text-body-secondary">Nov 11</div>
                            <p class="mb-auto">Explore the benefits of automatic cloud syncing with iNotebook. </p>
                            <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                                Continue reading
                                <svg class="bi"><use href="#chevron-right"></use></svg>
                            </a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-5">
                <div class="col-md-8">
                    <h3 class="pb-4 mb-4 fst-italic border-bottom">
                        From the People
                    </h3>
                    <article class="blog-post">
                        <h2 class="display-5 link-body-emphasis mb-1">Secure Your Thoughts</h2>
                        <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

                        <p>Data security is a top priority for iNotebook. In this post, we delve into the security measures that iNotebook uses to protect your notes and ensure that only you can access them.</p>
                        <hr />
                        <p>If you’re still using paper for your notes, this blog is for you. Learn how to transition to digital note-taking with iNotebook and why it’s a smarter, more efficient way to manage your ideas and tasks.</p>
                        <h2>Collaborate and Share</h2>
                        <p>Get a sneak peek into the upcoming features of iNotebook. This post discusses planned updates like collaboration tools and note-sharing capabilities, designed to make iNotebook even more powerful and user-friendly.</p>
                    </article>

                    <article class="blog-post">
                        <h2 class="display-5 link-body-emphasis mb-1">Why Note</h2>
                        <p class="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>

                        <p>Note-taking isn’t just about productivity; it’s also about mental clarity. This blog explores the psychological benefits of regular note-taking and how iNotebook can help you maintain a clear, focused mind.</p>
                    </article>


                    <nav class="blog-pagination" aria-label="Pagination">
                        <a class="btn btn-outline-primary rounded-pill" href="#">Older</a>
                        <a class="btn btn-outline-secondary rounded-pill disabled" aria-disabled="true">Newer</a>
                    </nav>

                </div>

                <div class="col-md-4">
                    <div class="position-sticky" style={{ top: '2rem' }}>
                        <div class="p-4 mb-3 bg-body-tertiary rounded">
                            <h4 class="fst-italic">About</h4>
                            <p class="mb-0">Welcome to iNotebook, your personal cloud-based note-taking app! With iNotebook, you can seamlessly create, organize, and access your notes from anywhere, on any device.</p>
                        </div>

                        <div>
                            <h4 class="fst-italic">Recent posts</h4>
                            <ul class="list-unstyled">
                                <li>
                                    <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                        <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                                        <div class="col-lg-8">
                                            <h6 class="mb-0">Organize Your Thoughts</h6>
                                            <small class="text-body-secondary">January 15, 2024</small>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                        <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                                        <div class="col-lg-8">
                                            <h6 class="mb-0">Customizing Your iNotebook Experience</h6>
                                            <small class="text-body-secondary">January 14, 2024</small>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                        <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                                        <div class="col-lg-8">
                                            <h6 class="mb-0">Never Lose a Note Again</h6>
                                            <small class="text-body-secondary">January 13, 2024</small>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Blog
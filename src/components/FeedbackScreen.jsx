import React from 'react';


function FeedbackScreen(props) {

    return (
        <main class="page contact-us-page">
        <section class="clean-block clean-form dark">
            <div class="container">
                <div class="block-heading">
                    <h2 class="text-info">Feedback</h2>
                    <p>Giving feedback to software developers may seem challenging. But with the right strategy, you can create a top-notch team that yields results.</p>
                </div>
                <form>
                    <div class="form-group"><label>Name</label><input class="form-control" type="text"/></div>
                    <div class="form-group"><label>Subject</label><input class="form-control" type="text"/></div>
                    <div class="form-group"><label>Email</label><input class="form-control" type="email"/></div>
                    <div class="form-group"><label>Message</label><textarea class="form-control"></textarea></div>
                    <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Send</button></div>
                </form>
            </div>
        </section>
        </main>
    
    );

}

export default FeedbackScreen;
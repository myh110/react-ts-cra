# React Router V6 初探

× Contents

× Share this Tutorial

Where would you like to share this to?
--------------------------------------

*   [](http://twitter.com/share?text=A%20Sneak%20Peek%20at%20React%20Router%20v6&url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Freact-react-router-v6%3Futm_content%3Dreact-react-router-v6%26utm_medium%3Dcommunity%26utm_source%3Dtwshare "Share on Twitter")[Twitter](http://twitter.com/share?text=A%20Sneak%20Peek%20at%20React%20Router%20v6&url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Freact-react-router-v6%3Futm_content%3Dreact-react-router-v6%26utm_medium%3Dcommunity%26utm_source%3Dtwshare "Share on Twitter")
*   [](https://www.reddit.com/submit?url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Freact-react-router-v6%3Futm_content%3Dreact-react-router-v6%26utm_medium%3Dcommunity%26utm_source%3Drdshare&title=A%20Sneak%20Peek%20at%20React%20Router%20v6 "Share on Reddit")[Reddit](https://www.reddit.com/submit?url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Freact-react-router-v6%3Futm_content%3Dreact-react-router-v6%26utm_medium%3Dcommunity%26utm_source%3Drdshare&title=A%20Sneak%20Peek%20at%20React%20Router%20v6 "Share on Reddit")
*   [](https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Freact-react-router-v6%3Futm_content%3Dreact-react-router-v6%26utm_medium%3Dcommunity%26utm_source%3Dhnshare&t=A%20Sneak%20Peek%20at%20React%20Router%20v6 "Submit to Hacker News")[Hacker News](https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Freact-react-router-v6%3Futm_content%3Dreact-react-router-v6%26utm_medium%3Dcommunity%26utm_source%3Dhnshare&t=A%20Sneak%20Peek%20at%20React%20Router%20v6 "Submit to Hacker News")
*   [](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Freact-react-router-v6%3Futm_content%3Dreact-react-router-v6%26utm_medium%3Dcommunity%26utm_source%3Dfbshare "Share on Facebook")[Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Freact-react-router-v6%3Futm_content%3Dreact-react-router-v6%26utm_medium%3Dcommunity%26utm_source%3Dfbshare "Share on Facebook")

Share link

Tutorial share link

× Share this Tutorial

Where would you like to share this to?
--------------------------------------

*   [](http://twitter.com/share?text=A%20Sneak%20Peek%20at%20React%20Router%20v6&url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Freact-react-router-v6%3Futm_content%3Dreact-react-router-v6%26utm_medium%3Dcommunity%26utm_source%3Dtwshare "Share on Twitter")[Twitter](http://twitter.com/share?text=A%20Sneak%20Peek%20at%20React%20Router%20v6&url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Freact-react-router-v6%3Futm_content%3Dreact-react-router-v6%26utm_medium%3Dcommunity%26utm_source%3Dtwshare "Share on Twitter")
*   [](https://www.reddit.com/submit?url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Freact-react-router-v6%3Futm_content%3Dreact-react-router-v6%26utm_medium%3Dcommunity%26utm_source%3Drdshare&title=A%20Sneak%20Peek%20at%20React%20Router%20v6 "Share on Reddit")[Reddit](https://www.reddit.com/submit?url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Freact-react-router-v6%3Futm_content%3Dreact-react-router-v6%26utm_medium%3Dcommunity%26utm_source%3Drdshare&title=A%20Sneak%20Peek%20at%20React%20Router%20v6 "Share on Reddit")
*   [](https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Freact-react-router-v6%3Futm_content%3Dreact-react-router-v6%26utm_medium%3Dcommunity%26utm_source%3Dhnshare&t=A%20Sneak%20Peek%20at%20React%20Router%20v6 "Submit to Hacker News")[Hacker News](https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Freact-react-router-v6%3Futm_content%3Dreact-react-router-v6%26utm_medium%3Dcommunity%26utm_source%3Dhnshare&t=A%20Sneak%20Peek%20at%20React%20Router%20v6 "Submit to Hacker News")
*   [](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Freact-react-router-v6%3Futm_content%3Dreact-react-router-v6%26utm_medium%3Dcommunity%26utm_source%3Dfbshare "Share on Facebook")[Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Freact-react-router-v6%3Futm_content%3Dreact-react-router-v6%26utm_medium%3Dcommunity%26utm_source%3Dfbshare "Share on Facebook")

Share link

Tutorial share link

[×](javascript:;)

#### Sign up for our newsletter

Get the latest tutorials on SysAdmin and open source topics.

  

 Sign Up 

[×](javascript:;)

Thanks for signing up!

DigitalOcean home

*   [Products](https://www.digitalocean.com/products/)
*   [Pricing](https://www.digitalocean.com/pricing/)
*   Docs
    
    *   [Product Docs](https://www.digitalocean.com/docs/)
    *   [API Docs](https://developers.digitalocean.com/documentation/)
    
*   Sign in
    
    Sign in to
    
    *   [Community](https://www.digitalocean.com/community/auth/digitalocean)
    *   [Control Panel](https://cloud.digitalocean.com/registrations/new)
    

*   [](https://www.digitalocean.com/)
*   [](https://www.digitalocean.com/community "DigitalOcean Community Home")
*   [Tutorials](https://www.digitalocean.com/community/tutorials)
*   [Questions](https://www.digitalocean.com/community/questions)
*   Get Involved
    
    Participate
    
    *   [
        
        **Hub for Good** Supporting each other to make an impact
        
        ](https://www.digitalocean.com/community/pages/hub-for-good)
    *   [
        
        **Write for DigitalOcean** You get paid, we donate to tech non-profits.
        
        ](https://www.digitalocean.com/community/pages/write-for-digitalocean)
    *   [
        
        **Hacktoberfest** Contribute to Open Source
        
        ](https://hacktoberfest.digitalocean.com/)
    
    Build with DigitalOcean
    
    *   [Community Tools and Integrations](https://www.digitalocean.com/community/tools "Community-built tools and integrations that use the DigitalOcean API")
    *   [Hatch Startup Program](https://www.digitalocean.com/hatch/ "Build your startup on DigitalOcean.")
    *   [Marketplace Partner Program](https://marketplace.digitalocean.com/vendors/ "List your open source One-Click Application in the DigitalOcean Marketplace")
    *   [Solutions Partner Program](https://www.digitalocean.com/partners/solutions-partners/ "Easily deploy & modernize your clients’ infrastructures with the Solutions Partner Program")
    *   [Presentation Grants](https://www.digitalocean.com/droplets-for-demos/ "DigitalOcean credits to fund research for conference and meetup presentations")
    *   [DigitalOcean on GitHub](https://github.com/digitalocean "View all the open-source projects that DigitalOcean have on GitHub")
    
*   [](javascript:void(0);)
*   Search Community /
*   [Sign Up](https://www.digitalocean.com/community/auth/digitalocean?display=sessionless+register+button)

#### Tutorial

A Sneak Peek at React Router v6
===============================

[React](https://www.digitalocean.com/community/tags/react)

*   By William Le
    
    Published onMarch 17, 2020

While this tutorial has content that we believe is of great benefit to our community, we have not yet tested or edited it to ensure you have an error-free learning experience. It's on our list, and we're working on it! You can help us out by using the "report an issue" button at the bottom of the tutorial.

At the time of this writing, React Router v6 is still in alpha, but the time is about right to start playing with it and exploring what’s to come. This guide will give you a peek at the new features/changes!

As you may know, the lead maintainers forked the [React Router](https://github.com/ReactTraining/react-router) project to create a lightweight alternative called [Reach Router](https://www.digitalocean.com/community/tutorials/react-reach-router-vs-react-router) in early 2018.

During this time, both libraries grew, however it seems that active development for Reach Router will stop, and will be merged into the [upcoming React Router v6](https://reacttraining.com/blog/reach-react-router-future/) 🛣

With the release coming soon, here’s a sneak peek of what’s coming!

Jump to…
--------

*   [<Switch> is becoming <Routes>](about:blank#switch-is-becoming-routes)
*   [Big changes with <Route>](about:blank#big-changes-with-route)
*   [Nested Routes are simpler](about:blank#nested-routes-are-simpler)
*   [useNavigate instead of useHistory](about:blank#usenavigate-instead-of-usehistory)
*   [From 20kb to 8kb](about:blank#from-20kb-to-8kb)

<Switch> is becoming <Routes>
-----------------------------

This top-level component is going to be renamed. However, its functionality is mostly remaining the same.

```js
// v5
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/profile"><Profile /></Route>
      </Switch>
    </BrowserRouter>
  );
} 
```

Just drop <Routes> in there:

```js
// v6
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/*" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
} 
```

Big Changes with <Route>
------------------------

In v6 the <Route> component is receiving the biggest overhaul. Fortunately, these new changes will actually be making it simpler to use!

The `component/render` prop will be substituted for the `element` prop:

```js
import Profile from './Profile';

// v5
<Route path=":userId" component={Profile} />
<Route
  path=":userId"
  render={routeProps => (
    <Profile routeProps={routeProps} animate={true} />
  )}
/>

// v6
<Route path=":userId" element={<Profile />} />
<Route path=":userId" element={<Profile animate={true} />} /> 
```

If you noticed, in v6 it’s much easier to pass props now. This has negated the use of the `render` prop in v5.

Nested Routes are Simpler
-------------------------

Nested routes in v5 had to be very explicitly defined. This required including a lot of string-matching logic into these components. See <Profile>:

```js
// v5
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

function Profile() {

  let match = useRouteMatch();

  return (
    <div>
      <nav>
        <Link to={`${match.url}/me`}>My Profile</Link>
      </nav>

      <Switch>
        <Route path={`${match.path}/me`}>
          <MyProfile />
        </Route>
        <Route path={`${match.path}/:id`}>
          <OthersProfile />
        </Route>
      </Switch>
    </div>
  );
} 
```

In v6, you can remove the string-matching logic. There isn’t any need for `useRouteMatch()` either! The result is pleasantly minimal:

```js
// v6
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';

// Approach #1
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/*" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

function Profile() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path="me" element={<MyProfile />} />
        <Route path=":id" element={<OthersProfile />} />
      </Routes>
    </div>
  );
}

// Approach #2
// You can also define all
// <Route> in a single place
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />}>
          <Route path=":id" element={<MyProfile />} />
          <Route path="me" element={<OthersProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Profile() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Outlet />
    </div>
  )
} 
```

Note: the <Outlet> component is used like `{this.props.children}` in React Router v6. This was a very popular feature from Reach Router!

useNavigate Instead of useHistory
---------------------------------

Sometimes you’ll want to programmatically navigate. For example, after a user submits a form and they need to be redirected to a confirmation page. This is the `useHistory` library in v5, which has been renamed to `useNavigate` in v6:

```js
// v5
import { useHistory } from 'react-router-dom';

function MyButton() {
  let history = useHistory();
  function handleClick() {
    history.push('/home');
  };
  return <button onClick={handleClick}>Submit</button>;
}; 
```

Now history.push() will be replaced with navigate():

```js
// v6
import { useNavigate } from 'react-router-dom';

function MyButton() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/home');
  };
  return <button onClick={handleClick}>Submit</button>;
}; 
```

In some cases, you’ll want to replace an URL in the browser history instead of pushing a new URL. This has slightly changed with v6:

```js
// v5
history.push('/home');
history.replace('/home');

// v6
navigate('/home');
navigate('/home', {replace: true}); 
```

From 20kb to 8kb
----------------

With all of these changes, you’d expect the bundle size to grow, but it’s actually reduced by half! The minified bundle of v5 was ~20kb, and v6 is only ~8kb.

![Screenshot: React router v5 vs v6](https://assets.digitalocean.com/articles/alligator/react/react-router-v6/comparing-react-router-v5-vs-v6.png)

Bundle sizes are calculated using the [BundlePhobia](https://bundlephobia.com/) tool.

Conclusion
----------

I’m pretty excited about the release of React Router v6. Hopefully this article has given you an idea of what to expect when it releases (which should be soon)! You can read more about React Router v6 in the [latest release notes](https://github.com/ReactTraining/react-router/releases/tag/v6.0.0-alpha.2) 📝

For a complete list of new features, see the official [React Router v6 migration guide](https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md) 🚏

About the authors

![Avatar](https://www.digitalocean.com/assets/community/icons/default-avatar-b0661a7966658c06c3c32b6610fd1dbabb680c147a1ea0039be79ffba067154c.png)

William Le

is a Community author on DigitalOcean.

#### Still looking for an answer?

[Ask a question](https://www.digitalocean.com/community/questions/new?tags=React) [Search for more help](javascript:void(0))

*   [Comments](https://www.digitalocean.com/community/tutorials/react-react-router-v6#nested-routes-are-simpler)
*   [Follow-Up Questions](https://www.digitalocean.com/community/tutorials/react-react-router-v6#nested-routes-are-simpler)

[![Creative Commons License](https://www.digitalocean.com/assets/community/creativecommons-027bb7f065acf05ba3c0f84a040d2da641648afc81daa6ff5570301d4998bbb6.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

[

![](https://images.prismic.io/digitalocean/ca12c951cc76f33037f3384bba9942545d160d82_iaan_illo.jpg?auto=compress,format)

Get our biweekly newsletter

Sign up for Infrastructure as a Newsletter.

](https://www.digitalocean.com/community/newsletter)[

![](https://images.prismic.io/digitalocean/8a56a463-cf2c-42a2-9d2f-9096c4218f30_HH4G-reference.jpg?auto=compress,format&rect=0,0,370,140&w=370&h=140)

Hollie's Hub for Good

Working on improving health and education, reducing inequality, and spurring economic growth? We'd like to help.

](https://www.digitalocean.com/community/pages/hollies-hub-for-good)[

![](https://images.prismic.io/digitalocean/70910e9fdeb57be46aaa209ce8d9b4dc8e117fab_w4do2.jpg?auto=compress,format)

Become a contributor

You get paid; we donate to tech nonprofits.

](https://www.digitalocean.com/community/pages/write-for-digitalocean)

Featured on Community [Kubernetes Course](https://www.digitalocean.com/community/curriculums/kubernetes-for-full-stack-developers) [Learn Python 3](https://www.digitalocean.com/community/tutorial_series/how-to-code-in-python-3) [Machine Learning in Python](https://www.digitalocean.com/community/tutorials/machine-learning-projects-python-a-digitalocean-ebook) [Getting started with Go](https://www.digitalocean.com/community/tutorials/how-to-write-your-first-program-in-go) [Intro to Kubernetes](https://www.digitalocean.com/community/tutorials/an-introduction-to-kubernetes)

* * *

DigitalOcean Products [Virtual Machines](https://www.digitalocean.com/products/droplets/) [Managed Databases](https://www.digitalocean.com/products/managed-databases/) [Managed Kubernetes](https://www.digitalocean.com/products/kubernetes/) [Block Storage](https://www.digitalocean.com/products/block-storage/) [Object Storage](https://www.digitalocean.com/products/spaces/) [Marketplace](https://marketplace.digitalocean.com/) [VPC](https://www.digitalocean.com/products/vpc/) [Load Balancers](https://www.digitalocean.com/products/load-balancer/)

[

### Welcome to the developer cloud

DigitalOcean makes it simple to launch in the cloud and scale up as you grow – whether you’re running one virtual machine or ten thousand.

Learn More](https://www.digitalocean.com/products)

 [![DigitalOcean Cloud Control Panel](https://images.prismic.io/digitalocean/95c1215227aa7f39f2bd23076de28feb969741c7_cloud.digitalocean.com_projects_63f9252f-652b-4645-9c0c-bee96f2bc503_resources_ic0ce81-2.png?auto=compress,format)](https://www.digitalocean.com/products) 

[DigitalOcean Homepage](https://www.digitalocean.com/)  
  
© 2021 DigitalOcean, LLC. All rights reserved.

Company

*   [About](https://www.digitalocean.com/about/)
*   [Leadership](https://www.digitalocean.com/about/leadership/)
*   [Blog](https://www.digitalocean.com/blog/)
*   [Careers](https://www.digitalocean.com/careers/)
*   [Partners](https://www.digitalocean.com/partners/)
*   [Referral Program](https://www.digitalocean.com/referral-program/)
*   [Press](https://www.digitalocean.com/press/)
*   [Legal](https://www.digitalocean.com/legal/)
*   [Security & Trust Center](https://www.digitalocean.com/trust/)

Products

*   [Pricing](https://www.digitalocean.com/pricing/)
*   [Products Overview](https://www.digitalocean.com/products/)
*   [Droplets](https://www.digitalocean.com/products/droplets/)
*   [Kubernetes](https://www.digitalocean.com/products/kubernetes/)
*   [Managed Databases](https://www.digitalocean.com/products/managed-databases/)
*   [Spaces](https://www.digitalocean.com/products/spaces/)
*   [Marketplace](https://www.digitalocean.com/products/marketplace/)
*   [Load Balancers](https://www.digitalocean.com/products/load-balancer/)
*   [Block Storage](https://www.digitalocean.com/products/block-storage/)
*   [API Documentation](https://developers.digitalocean.com/documentation/)
*   [Documentation](https://www.digitalocean.com/docs)
*   [Release Notes](https://www.digitalocean.com/docs/release-notes/)

Community

*   [Tutorials](https://www.digitalocean.com/community/tutorials)
*   [Q&A](https://www.digitalocean.com/community/questions)
*   [Tools and Integrations](https://www.digitalocean.com/community/tools)
*   [Tags](https://www.digitalocean.com/community/tags)
*   [Product Ideas](https://ideas.digitalocean.com/)
*   [Write for DigitalOcean](https://www.digitalocean.com/write-for-donations/)
*   [Presentation Grants](https://www.digitalocean.com/droplets-for-demos/)
*   [Hatch Startup Program](https://www.digitalocean.com/hatch/)
*   [Shop Swag](http://store.digitalocean.com/)
*   [Research Program](https://www.digitalocean.com/research/)
*   [Open Source](https://www.digitalocean.com/open-source/)
*   [Code of Conduct](https://www.digitalocean.com/community/pages/code-of-conduct)

Contact

*   [Get Support](https://www.digitalocean.com/support/)
*   [Trouble Signing In?](https://www.digitalocean.com/docs/getting-started/faq/)
*   [Sales](https://www.digitalocean.com/company/contact/sales/)
*   [Report Abuse](https://www.digitalocean.com/company/contact/#abuse)
*   [System Status](https://status.digitalocean.com/)

× Join the Community

Before you can do that To complete this action, sign in to your Community account or create a new one.
======================================================================================================

[Sign In](https://www.digitalocean.com/community/auth/digitalocean) [Sign Up](https://www.digitalocean.com/community/auth/digitalocean?display=sessionless+register)

$(document).on("community:rest\_loaded", function() { if (!!window.init\_sharing) { window.init\_sharing(); } new window.NewsletterSignup(); new window.GrowableMarkdown({ target: '\[data-growable-markdown\]' }); window.initTranslationFeedbackActions(4168); function getFeaturedTitle() { if ($('.featured-item-title').length) { return $('.featured-item-title').first().text(); } else { return $.trim($.trim($('.featured-item-highlight').first().text()).split(' ')\[0\]); } } function highTrafficRecord() { return $('.featured-item-highlight\[data-analytics="high-traffic"\]').length } function pushToSegment(action, category, name) { window.analytics.track('Web Interaction', { action: action, category: category, name: name, }); } function pushToGA(event, title, position) { window.dataLayer = window.dataLayer || \[\]; window.dataLayer.push({ 'event': event, 'title': title, 'position': position, 'nonInteraction': true, }); } function featuredRelatedSegementCall(title) { highTrafficRecord() ? pushToSegment('cta\_viewed', 'high\_traffic', title) : pushToSegment('cta\_viewed', 'right\_rail', title); } function featuredRelatedGACall(title) { highTrafficRecord() ? pushToGA('cta\_viewed', title, 'high\_traffic') : pushToGA('cta\_viewed', title, 'right\_rail'); } function featuredRelatedVisible() { if ($('.featured-items-right-bar-container').is(':visible')) { if ($('.featured-item-highlight').is(':visible')) { var title = getFeaturedTitle(); featuredRelatedSegementCall(title); featuredRelatedGACall(title); } } } $.get('/community/tutorials/react-react-router-v6/comments/new', function(data){ $('.content-comments').html(data); }); $.get('/community/tutorials/react-react-router-v6/featured\_content', function(data){ $('.featured-items-right-bar-container').html(data); featuredRelatedVisible(); }); $.get('/community/tutorials/react-react-router-v6/helpfulness\_and\_share\_box', function(data){ $('.helpfulness\_and\_share\_box').html(data); }); }); {"@context":"http://schema.org","@type":"Article","name":"A Sneak Peek at React Router v6","headline":"A Sneak Peek at React Router v6","alternativeHeadline":"A Sneak Peek at React Router v6","description":"A look at the new features and changes coming up with the release of React Router version 6.","keywords":"Alligator,Needs Review,React","url":"https://www.digitalocean.com/community/tutorials/react-react-router-v6","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.digitalocean.com/community/tutorials/react-react-router-v6"},"dateModified":"2021-01-02T02:47:21Z","inLanguage":"en","accessMode":"textual","accessModeSufficient":"textual","isAccessibleForFree":true,"license":"https://creativecommons.org/licenses/by-nc-sa/4.0/","publishingPrinciples":"https://www.digitalocean.com/community/tutorials/technical-recommendations-and-best-practices-for-digitalocean-s-tutorials","author":\[{"@type":"Person","name":"William Le"}\],"datePublished":"2020-03-17T00:00:00Z","editor":\[\],"image":{"@type":"ImageObject","url":"https://www.digitalocean.com/assets/community/illustrations/DigitalOcean\_Community-e00e73a18df20667c3117725e727f3ade330204dff619ad8153050ded7341627.jpg","height":375,"width":750},"interactionStatistic":\[{"@type":"InteractionCounter","interactionType":"http://schema.org/LikeAction","userInteractionCount":"14"},{"@type":"InteractionCounter","interactionType":"http://schema.org/CommentAction","userInteractionCount":"0"}\],"sourceOrganization":{"@type":"Organization","name":"DigitalOcean Community","url":"https://www.digitalocean.com/community"},"publisher":{"@type":"Organization","name":"DigitalOcean","url":"https://www.digitalocean.com","logo":{"@type":"ImageObject","url":"https://assets.digitalocean.com/logos/DO\_Logo\_horizontal\_blue.png","width":351,"height":60}}} $(document).on("community:rest\_loaded", function() { $('.date-views').append('<span class=\\"meta-section pageviews\\"><span class=\\"icon icon-eye v-mid\\"><\\/span><span class=\\"views-count v-mid\\">117.5k<\\/span><span class=\\"sr-only\\"> views<\\/span><\\/span>'); });

×

Community

*   [Tutorials](https://www.digitalocean.com/community/tutorials)
*   [Questions](https://www.digitalocean.com/community/questions)
*   [Write for Us](https://www.digitalocean.com/community/pages/write-for-digitalocean)
*   [Hacktoberfest](https://hacktoberfest.digitalocean.com/)
*   [Tools](https://www.digitalocean.com/community/tools)

Products

*   [Homepage](https://www.digitalocean.com/)
*   [Pricing](https://www.digitalocean.com/pricing)
*   [Product Overview](https://www.digitalocean.com/products)
*   [Marketplace](https://marketplace.digitalocean.com/)

Customers

*   [Control Panel](https://cloud.digitalocean.com/login)
*   [Documentation](https://www.digitalocean.com/docs/)
*   [Contact Support](https://www.digitalocean.com/company/contact/#support)
*   [Contact Sales](https://www.digitalocean.com/company/contact/sales/)

*   [Sign In](https://www.digitalocean.com/community/auth/digitalocean)

$(function() { $('.use-universal-search-js').on('click', function () { $('#q').trigger('click'); }); function featuredBannerSegmentCall(title) { window.analytics.page({ action: 'cta\_viewed', category: 'banner', name: title, }); } function featuredBannerGACall(title) { window.dataLayer = window.dataLayer || \[\]; window.dataLayer.push({ 'event': 'cta\_viewed', 'title': title, 'position': 'banner', 'nonInteraction': true, }); } function featuredBannerVisible() { if ($('li\[data-js="global-navbar-banner"\]').is(':visible')) { var title = $('li\[data-js="global-navbar-banner"\] a').attr('title'); featuredBannerSegmentCall(title); featuredBannerGACall(title); } } $.get('/community/banner', function(data) { $('\[data-js="global-navbar-banner"\]').html(data); $('.navbar .utility').attr('style', $('\[data-js="global-navbar-banner"\] a').data('navbar-style')); featuredBannerVisible(); }); }); window.loadUniversalSearchScript( function () { var search = new UniversalSearch({ element\_id: 'q', search\_on\_slash: true, primary\_list: \['quicknav', 'community\_consolidated'\], secondary\_list: \['alldocs', 'marketplace'\], algolia\_app\_id: "6ZHEUVKJ88", algolia\_public\_key: "c5470567eae7fa1177d43222e18ba086" }); search.start(); });  

本文转自 [https://www.digitalocean.com/community/tutorials/react-react-router-v6#nested-routes-are-simpler](https://www.digitalocean.com/community/tutorials/react-react-router-v6#nested-routes-are-simpler)，如有侵权，请联系删除。

## Link

[原文链接 A Sneak Peek at React Router v6](https://www.digitalocean.com/community/tutorials/react-react-router-v6#nested-routes-are-simpler)

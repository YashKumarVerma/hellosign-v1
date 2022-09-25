## Inspiration
Any large organization deals with sharing of data and resources and the area of OAuth provides to facilitate the same are heavily dominated by large tech giants. This 
- keeps data in third party servers
- does not provide complete control on application behavior
- has no scope of customization or plugins

## What it does
HelloAuth is 
- an open source (SaaS for 💰)
- fully fledged OAuth2.0 Server
- with client libraries in 2 languages, 4 frameworks
- with scopes to share restricted data (e.g. only name, email etc)
- integrates with HelloSign to make resource sharing process legally binding and force end users to sign document before granting access to resources
- and security features to restrict origin and redirect URLs
- with client libraries to integrate quickly in
    - golang 
        - gin 
        - fiber
    - nodejs
        - typescript
        - javascript

## How we built it
Since the scope of the project was huge, I divided it into 3 parts.

**Part 0 - Core OAuth2.0**
I started with the core features that constitute the OAuth flow, dealing with creation and handling of client_id and client secrets, security configurations to control origin and redirect links, and scopes to allow fine control on what data should be shared.


**Part 1 - Client Libraries**
Next, I went forward to implement the client libraries that allow tird party developers to interact with the primary OAuth server.

I wrote libraries for 4 usecases
1. NodeJS - javascript
2. NodeJS - typescript
3. GoLang - gin
4. GoLang - fiber

This demonstrates the scope of the integrations possible, and allows clients written in these applications to request resources from the OAuth server.

**Part 2 - HelloSign**
Finally HelloSign is used as a signing layer which allows adding a legally binding step during sign-in, which requires the user to sign the supplied document else the resources are not shared. This is achieved by the nodejs sdk.

## Challenges we ran into
- Implementing the OAuth server from scratch was a major roadblock, as all the flows needed to be implemented from ground up, with token exchanges for resource being the tricky part.
- Upon completion of step 0, I faced a major difficulty in writing the library for golang as I wanted to test the usability on a compiled langauge, faced a lot of issues in implementing a library in golang. NodeJS was easier, but shipping the same code for nodejs and typescript was tough.
- The frontend of the OAuth server is written in vanilla html, css and javascript, and not react, so adding any logic was very tough 

## Accomplishments that we're proud of
- writing a server from scratch
- writing libraries
- integrating hellosign

## What we learned
- writing a backend from scratch
- working with legally beginding scopes
- writing golang libraries

## What's next for HelloSign - "sign" into apps
- to convert it into a fully fledged SaaS and merket it
- allow linking other data models as resources in the OAuth server to allow sharing diverse resources.


---
All code resources:
https://github.com/YashKumarVerma/hellosign-v1


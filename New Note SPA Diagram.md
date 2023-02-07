Diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

```mermaid
    sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note left of server: The server start executing the JS code that push the content and date note at a JSON file
    activate server
    server-->>browser: status code 201
    Note right of browser: The browser rerenders the note list
```

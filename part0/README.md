# Tasks

## 0.1

Done

## 0.2

Done

## 0.3

Done

## 0.4

```diagram
User->Browser: Enters in note and presses submit
Browser->Server: POST /new_note
Server->Browser: 302 /notes
note over Browser: Refresh
```

## 0.5

```diagram
User->Browser: Goes to SPA page
Browser->Server: Sends request for index page
Server->Browser: Responds with index page
note over Browser: Parses html, seeing there are <script> tags
Browser->Server: Requests scripts in parallel
Server->Browser: Scripts
note over Browser: Executes scripts
note over Browser: Scripts modify DOM, rendering the page to the user
```

## 0.6

```diagram
User->Browser: Enters in note and presses submit
Browser->Server: POST /new_note_spa
Server->Browser: 201 /new_note_spa
note over Browser: Rerenders page using new data, without reloading
```

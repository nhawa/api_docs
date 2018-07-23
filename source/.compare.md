---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Welcome to the generated API reference.
[Get Postman Collection](http://128.199.229.155/docs/collection.json)

<!-- END_INFO -->

#general
<!-- START_6275500f101710132d118311e48b0340 -->
## api/issue

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/issue" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/issue",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/issue`


<!-- END_6275500f101710132d118311e48b0340 -->

<!-- START_6c4d66bf12e5c8a373a3ef1d9cc48085 -->
## api/issue

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/issue" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/issue",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "file_put_contents(\/var\/www\/html\/traveloop\/storage\/framework\/cache\/data\/e0\/09\/e0095ea26ce53470cff657a390f89a44c7a81838): failed to open stream: No such file or directory",
        "exception": "ErrorException",
        "trace": [
            {
                "function": "handleError",
                "class": "Illuminate\\Foundation\\Bootstrap\\HandleExceptions",
                "type": "->",
                "args": [
                    2,
                    "file_put_contents(\/var\/www\/html\/traveloop\/storage\/framework\/cache\/data\/e0\/09\/e0095ea26ce53470cff657a390f89a44c7a81838): failed to open stream: No such file or directory",
                    "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Filesystem\/Filesystem.php",
                    122,
                    {
                        "path": "\/var\/www\/html\/traveloop\/storage\/framework\/cache\/data\/e0\/09\/e0095ea26ce53470cff657a390f89a44c7a81838",
                        "contents": "1516788621i:0;",
                        "lock": true
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Filesystem\/Filesystem.php",
                "line": 122,
                "function": "file_put_contents",
                "args": [
                    "\/var\/www\/html\/traveloop\/storage\/framework\/cache\/data\/e0\/09\/e0095ea26ce53470cff657a390f89a44c7a81838",
                    "1516788621i:0;",
                    2
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Cache\/FileStore.php",
                "line": 66,
                "function": "put",
                "class": "Illuminate\\Filesystem\\Filesystem",
                "type": "->",
                "args": [
                    "\/var\/www\/html\/traveloop\/storage\/framework\/cache\/data\/e0\/09\/e0095ea26ce53470cff657a390f89a44c7a81838",
                    "1516788621i:0;",
                    true
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Cache\/Repository.php",
                "line": 175,
                "function": "put",
                "class": "Illuminate\\Cache\\FileStore",
                "type": "->",
                "args": [
                    "c5016bc75d22aadee3288096d343af54bd129a3b",
                    0,
                    "1"
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Cache\/Repository.php",
                "line": 226,
                "function": "put",
                "class": "Illuminate\\Cache\\Repository",
                "type": "->",
                "args": [
                    "c5016bc75d22aadee3288096d343af54bd129a3b",
                    0,
                    "1"
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Cache\/RateLimiter.php",
                "line": 76,
                "function": "add",
                "class": "Illuminate\\Cache\\Repository",
                "type": "->",
                "args": [
                    "c5016bc75d22aadee3288096d343af54bd129a3b",
                    0,
                    "1"
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Middleware\/ThrottleRequests.php",
                "line": 47,
                "function": "hit",
                "class": "Illuminate\\Cache\\RateLimiter",
                "type": "->",
                "args": [
                    "c5016bc75d22aadee3288096d343af54bd129a3b",
                    "1"
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 148,
                "function": "handle",
                "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    },
                    {},
                    "60",
                    "1"
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 53,
                "function": "Illuminate\\Pipeline\\{closure}",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 102,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
                "line": 574,
                "function": "then",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
                "line": 533,
                "function": "runRouteWithinStack",
                "class": "Illuminate\\Routing\\Router",
                "type": "->",
                "args": [
                    {
                        "uri": "api\/issue",
                        "methods": [
                            "GET",
                            "HEAD"
                        ],
                        "action": {
                            "middleware": "api",
                            "uses": "App\\Http\\Controllers\\Api\\AccessTokenController@issue",
                            "controller": "App\\Http\\Controllers\\Api\\AccessTokenController@issue",
                            "namespace": "App\\Http\\Controllers",
                            "prefix": "api",
                            "where": []
                        },
                        "controller": {},
                        "defaults": [],
                        "wheres": [],
                        "parameters": [],
                        "parameterNames": [],
                        "computedMiddleware": [
                            "api"
                        ],
                        "compiled": {}
                    },
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
                "line": 511,
                "function": "dispatchToRoute",
                "class": "Illuminate\\Routing\\Router",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
                "line": 176,
                "function": "dispatch",
                "class": "Illuminate\\Routing\\Router",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 30,
                "function": "Illuminate\\Foundation\\Http\\{closure}",
                "class": "Illuminate\\Foundation\\Http\\Kernel",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
                "line": 30,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 148,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    },
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 53,
                "function": "Illuminate\\Pipeline\\{closure}",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
                "line": 30,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 148,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    },
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 53,
                "function": "Illuminate\\Pipeline\\{closure}",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/ValidatePostSize.php",
                "line": 27,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 148,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    },
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 53,
                "function": "Illuminate\\Pipeline\\{closure}",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/CheckForMaintenanceMode.php",
                "line": 46,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 148,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    },
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 53,
                "function": "Illuminate\\Pipeline\\{closure}",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 102,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
                "line": 151,
                "function": "then",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
                "line": 116,
                "function": "sendRequestThroughRouter",
                "class": "Illuminate\\Foundation\\Http\\Kernel",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Mpociot\/ApiDoc\/Generators\/LaravelGenerator.php",
                "line": 116,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Http\\Kernel",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Mpociot\/ApiDoc\/Generators\/AbstractGenerator.php",
                "line": 98,
                "function": "callRoute",
                "class": "Mpociot\\ApiDoc\\Generators\\LaravelGenerator",
                "type": "->",
                "args": [
                    "GET",
                    "api\/issue",
                    [],
                    [],
                    [],
                    {
                        "CONTENT_TYPE": "application\/json",
                        "Accept": "application\/json"
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Mpociot\/ApiDoc\/Generators\/LaravelGenerator.php",
                "line": 58,
                "function": "getRouteResponse",
                "class": "Mpociot\\ApiDoc\\Generators\\AbstractGenerator",
                "type": "->",
                "args": [
                    {
                        "uri": "api\/issue",
                        "methods": [
                            "GET",
                            "HEAD"
                        ],
                        "action": {
                            "middleware": "api",
                            "uses": "App\\Http\\Controllers\\Api\\AccessTokenController@issue",
                            "controller": "App\\Http\\Controllers\\Api\\AccessTokenController@issue",
                            "namespace": "App\\Http\\Controllers",
                            "prefix": "api",
                            "where": []
                        },
                        "controller": null,
                        "defaults": [],
                        "wheres": [],
                        "parameters": null,
                        "parameterNames": null,
                        "computedMiddleware": null,
                        "compiled": null
                    },
                    [],
                    []
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Mpociot\/ApiDoc\/Commands\/GenerateDocumentation.php",
                "line": 261,
                "function": "processRoute",
                "class": "Mpociot\\ApiDoc\\Generators\\LaravelGenerator",
                "type": "->",
                "args": [
                    {
                        "uri": "api\/issue",
                        "methods": [
                            "GET",
                            "HEAD"
                        ],
                        "action": {
                            "middleware": "api",
                            "uses": "App\\Http\\Controllers\\Api\\AccessTokenController@issue",
                            "controller": "App\\Http\\Controllers\\Api\\AccessTokenController@issue",
                            "namespace": "App\\Http\\Controllers",
                            "prefix": "api",
                            "where": []
                        },
                        "controller": null,
                        "defaults": [],
                        "wheres": [],
                        "parameters": null,
                        "parameterNames": null,
                        "computedMiddleware": null,
                        "compiled": null
                    },
                    [],
                    [],
                    true
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Mpociot\/ApiDoc\/Commands\/GenerateDocumentation.php",
                "line": 83,
                "function": "processLaravelRoutes",
                "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
                "type": "->",
                "args": [
                    {},
                    [],
                    "api\/*",
                    null
                ]
            },
            {
                "function": "handle",
                "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
                "type": "->",
                "args": []
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
                "line": 29,
                "function": "call_user_func_array",
                "args": [
                    [
                        {},
                        "handle"
                    ],
                    []
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
                "line": 87,
                "function": "Illuminate\\Container\\{closure}",
                "class": "Illuminate\\Container\\BoundMethod",
                "type": "::",
                "args": []
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
                "line": 31,
                "function": "callBoundMethod",
                "class": "Illuminate\\Container\\BoundMethod",
                "type": "::",
                "args": [
                    {
                        "contextual": []
                    },
                    [
                        {},
                        "handle"
                    ],
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/Container.php",
                "line": 539,
                "function": "call",
                "class": "Illuminate\\Container\\BoundMethod",
                "type": "::",
                "args": [
                    {
                        "contextual": []
                    },
                    [
                        {},
                        "handle"
                    ],
                    [],
                    null
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
                "line": 182,
                "function": "call",
                "class": "Illuminate\\Container\\Container",
                "type": "->",
                "args": [
                    [
                        {},
                        "handle"
                    ]
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/symfony\/console\/Command\/Command.php",
                "line": 252,
                "function": "execute",
                "class": "Illuminate\\Console\\Command",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
                "line": 167,
                "function": "run",
                "class": "Symfony\\Component\\Console\\Command\\Command",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/symfony\/console\/Application.php",
                "line": 936,
                "function": "run",
                "class": "Illuminate\\Console\\Command",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/symfony\/console\/Application.php",
                "line": 240,
                "function": "doRunCommand",
                "class": "Symfony\\Component\\Console\\Application",
                "type": "->",
                "args": [
                    {},
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/symfony\/console\/Application.php",
                "line": 148,
                "function": "doRun",
                "class": "Symfony\\Component\\Console\\Application",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Console\/Kernel.php",
                "line": 122,
                "function": "run",
                "class": "Symfony\\Component\\Console\\Application",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/artisan",
                "line": 35,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Console\\Kernel",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            }
        ]
    }
}
```

### HTTP Request
`GET api/issue`

`HEAD api/issue`


<!-- END_6c4d66bf12e5c8a373a3ef1d9cc48085 -->

<!-- START_c667d8c2b140d73d1e937bbc67e1dc0a -->
## api/wishlist

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/wishlist" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/wishlist",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/wishlist`


<!-- END_c667d8c2b140d73d1e937bbc67e1dc0a -->

<!-- START_af7ae694cdf5112bc76c515727f56174 -->
## api/wishlist

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/wishlist" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/wishlist",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "file_put_contents(\/var\/www\/html\/traveloop\/storage\/framework\/cache\/data\/4d\/5e\/4d5ed3e1bed6738d9d79293f3f8da89d5f63542b): failed to open stream: No such file or directory",
        "exception": "ErrorException",
        "trace": [
            {
                "function": "handleError",
                "class": "Illuminate\\Foundation\\Bootstrap\\HandleExceptions",
                "type": "->",
                "args": [
                    2,
                    "file_put_contents(\/var\/www\/html\/traveloop\/storage\/framework\/cache\/data\/4d\/5e\/4d5ed3e1bed6738d9d79293f3f8da89d5f63542b): failed to open stream: No such file or directory",
                    "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Filesystem\/Filesystem.php",
                    122,
                    {
                        "path": "\/var\/www\/html\/traveloop\/storage\/framework\/cache\/data\/4d\/5e\/4d5ed3e1bed6738d9d79293f3f8da89d5f63542b",
                        "contents": "1516788621i:0;",
                        "lock": true
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Filesystem\/Filesystem.php",
                "line": 122,
                "function": "file_put_contents",
                "args": [
                    "\/var\/www\/html\/traveloop\/storage\/framework\/cache\/data\/4d\/5e\/4d5ed3e1bed6738d9d79293f3f8da89d5f63542b",
                    "1516788621i:0;",
                    2
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Cache\/FileStore.php",
                "line": 66,
                "function": "put",
                "class": "Illuminate\\Filesystem\\Filesystem",
                "type": "->",
                "args": [
                    "\/var\/www\/html\/traveloop\/storage\/framework\/cache\/data\/4d\/5e\/4d5ed3e1bed6738d9d79293f3f8da89d5f63542b",
                    "1516788621i:0;",
                    true
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Cache\/Repository.php",
                "line": 175,
                "function": "put",
                "class": "Illuminate\\Cache\\FileStore",
                "type": "->",
                "args": [
                    "3807aa8c21409786b49848e28d02b6c8a10d2f3f",
                    0,
                    "1"
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Cache\/Repository.php",
                "line": 226,
                "function": "put",
                "class": "Illuminate\\Cache\\Repository",
                "type": "->",
                "args": [
                    "3807aa8c21409786b49848e28d02b6c8a10d2f3f",
                    0,
                    "1"
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Cache\/RateLimiter.php",
                "line": 76,
                "function": "add",
                "class": "Illuminate\\Cache\\Repository",
                "type": "->",
                "args": [
                    "3807aa8c21409786b49848e28d02b6c8a10d2f3f",
                    0,
                    "1"
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Middleware\/ThrottleRequests.php",
                "line": 47,
                "function": "hit",
                "class": "Illuminate\\Cache\\RateLimiter",
                "type": "->",
                "args": [
                    "3807aa8c21409786b49848e28d02b6c8a10d2f3f",
                    "1"
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 148,
                "function": "handle",
                "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    },
                    {},
                    "60",
                    "1"
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 53,
                "function": "Illuminate\\Pipeline\\{closure}",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 102,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
                "line": 574,
                "function": "then",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
                "line": 533,
                "function": "runRouteWithinStack",
                "class": "Illuminate\\Routing\\Router",
                "type": "->",
                "args": [
                    {
                        "uri": "api\/wishlist",
                        "methods": [
                            "GET",
                            "HEAD"
                        ],
                        "action": {
                            "middleware": [
                                "api",
                                "auth:api"
                            ],
                            "uses": "App\\Http\\Controllers\\Api\\WishlistController@wishList",
                            "controller": "App\\Http\\Controllers\\Api\\WishlistController@wishList",
                            "namespace": "App\\Http\\Controllers",
                            "prefix": "api\/wishlist",
                            "where": []
                        },
                        "controller": {
                            "adultAge": 20,
                            "childAge": 17,
                            "infantAge": 10,
                            "currency": "IDR",
                            "radius": 50,
                            "expiredBookingTime": 7200,
                            "precision": 0,
                            "locationInfo": null,
                            "request": null,
                            "project": "",
                            "haveVal1": false,
                            "haveVal2": false,
                            "haveCurVal": false,
                            "markup": null,
                            "currVal": null,
                            "discount": null,
                            "tax": null,
                            "charge": null,
                            "promo": 0
                        },
                        "defaults": [],
                        "wheres": [],
                        "parameters": [],
                        "parameterNames": [],
                        "computedMiddleware": [
                            "api",
                            "auth:api",
                            {}
                        ],
                        "compiled": {}
                    },
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
                "line": 511,
                "function": "dispatchToRoute",
                "class": "Illuminate\\Routing\\Router",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
                "line": 176,
                "function": "dispatch",
                "class": "Illuminate\\Routing\\Router",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 30,
                "function": "Illuminate\\Foundation\\Http\\{closure}",
                "class": "Illuminate\\Foundation\\Http\\Kernel",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
                "line": 30,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 148,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    },
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 53,
                "function": "Illuminate\\Pipeline\\{closure}",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
                "line": 30,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 148,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    },
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 53,
                "function": "Illuminate\\Pipeline\\{closure}",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/ValidatePostSize.php",
                "line": 27,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 148,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    },
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 53,
                "function": "Illuminate\\Pipeline\\{closure}",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/CheckForMaintenanceMode.php",
                "line": 46,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 148,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    },
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 53,
                "function": "Illuminate\\Pipeline\\{closure}",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 102,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
                "line": 151,
                "function": "then",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
                "line": 116,
                "function": "sendRequestThroughRouter",
                "class": "Illuminate\\Foundation\\Http\\Kernel",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Mpociot\/ApiDoc\/Generators\/LaravelGenerator.php",
                "line": 116,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Http\\Kernel",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Mpociot\/ApiDoc\/Generators\/AbstractGenerator.php",
                "line": 98,
                "function": "callRoute",
                "class": "Mpociot\\ApiDoc\\Generators\\LaravelGenerator",
                "type": "->",
                "args": [
                    "GET",
                    "api\/wishlist",
                    [],
                    [],
                    [],
                    {
                        "CONTENT_TYPE": "application\/json",
                        "Accept": "application\/json"
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Mpociot\/ApiDoc\/Generators\/LaravelGenerator.php",
                "line": 58,
                "function": "getRouteResponse",
                "class": "Mpociot\\ApiDoc\\Generators\\AbstractGenerator",
                "type": "->",
                "args": [
                    {
                        "uri": "api\/wishlist",
                        "methods": [
                            "GET",
                            "HEAD"
                        ],
                        "action": {
                            "middleware": [
                                "api",
                                "auth:api"
                            ],
                            "uses": "App\\Http\\Controllers\\Api\\WishlistController@wishList",
                            "controller": "App\\Http\\Controllers\\Api\\WishlistController@wishList",
                            "namespace": "App\\Http\\Controllers",
                            "prefix": "api\/wishlist",
                            "where": []
                        },
                        "controller": null,
                        "defaults": [],
                        "wheres": [],
                        "parameters": null,
                        "parameterNames": null,
                        "computedMiddleware": null,
                        "compiled": null
                    },
                    [],
                    []
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Mpociot\/ApiDoc\/Commands\/GenerateDocumentation.php",
                "line": 261,
                "function": "processRoute",
                "class": "Mpociot\\ApiDoc\\Generators\\LaravelGenerator",
                "type": "->",
                "args": [
                    {
                        "uri": "api\/wishlist",
                        "methods": [
                            "GET",
                            "HEAD"
                        ],
                        "action": {
                            "middleware": [
                                "api",
                                "auth:api"
                            ],
                            "uses": "App\\Http\\Controllers\\Api\\WishlistController@wishList",
                            "controller": "App\\Http\\Controllers\\Api\\WishlistController@wishList",
                            "namespace": "App\\Http\\Controllers",
                            "prefix": "api\/wishlist",
                            "where": []
                        },
                        "controller": null,
                        "defaults": [],
                        "wheres": [],
                        "parameters": null,
                        "parameterNames": null,
                        "computedMiddleware": null,
                        "compiled": null
                    },
                    [],
                    [],
                    true
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Mpociot\/ApiDoc\/Commands\/GenerateDocumentation.php",
                "line": 83,
                "function": "processLaravelRoutes",
                "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
                "type": "->",
                "args": [
                    {},
                    [],
                    "api\/*",
                    null
                ]
            },
            {
                "function": "handle",
                "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
                "type": "->",
                "args": []
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
                "line": 29,
                "function": "call_user_func_array",
                "args": [
                    [
                        {},
                        "handle"
                    ],
                    []
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
                "line": 87,
                "function": "Illuminate\\Container\\{closure}",
                "class": "Illuminate\\Container\\BoundMethod",
                "type": "::",
                "args": []
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
                "line": 31,
                "function": "callBoundMethod",
                "class": "Illuminate\\Container\\BoundMethod",
                "type": "::",
                "args": [
                    {
                        "contextual": []
                    },
                    [
                        {},
                        "handle"
                    ],
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/Container.php",
                "line": 539,
                "function": "call",
                "class": "Illuminate\\Container\\BoundMethod",
                "type": "::",
                "args": [
                    {
                        "contextual": []
                    },
                    [
                        {},
                        "handle"
                    ],
                    [],
                    null
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
                "line": 182,
                "function": "call",
                "class": "Illuminate\\Container\\Container",
                "type": "->",
                "args": [
                    [
                        {},
                        "handle"
                    ]
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/symfony\/console\/Command\/Command.php",
                "line": 252,
                "function": "execute",
                "class": "Illuminate\\Console\\Command",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
                "line": 167,
                "function": "run",
                "class": "Symfony\\Component\\Console\\Command\\Command",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/symfony\/console\/Application.php",
                "line": 936,
                "function": "run",
                "class": "Illuminate\\Console\\Command",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/symfony\/console\/Application.php",
                "line": 240,
                "function": "doRunCommand",
                "class": "Symfony\\Component\\Console\\Application",
                "type": "->",
                "args": [
                    {},
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/symfony\/console\/Application.php",
                "line": 148,
                "function": "doRun",
                "class": "Symfony\\Component\\Console\\Application",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Console\/Kernel.php",
                "line": 122,
                "function": "run",
                "class": "Symfony\\Component\\Console\\Application",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/artisan",
                "line": 35,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Console\\Kernel",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            }
        ]
    }
}
```

### HTTP Request
`GET api/wishlist`

`HEAD api/wishlist`


<!-- END_af7ae694cdf5112bc76c515727f56174 -->

<!-- START_cd29763973a8a57767eb14c485128fbb -->
## api/wishlist

> Example request:

```bash
curl -X DELETE "http://128.199.229.155/api/wishlist" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/wishlist",
    "method": "DELETE",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`DELETE api/wishlist`


<!-- END_cd29763973a8a57767eb14c485128fbb -->

<!-- START_c4e213f41be16db2e3c16a636368bcbe -->
## api/user/update

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/user/update" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/user/update",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "Unauthenticated."
    }
}
```

### HTTP Request
`GET api/user/update`

`HEAD api/user/update`


<!-- END_c4e213f41be16db2e3c16a636368bcbe -->

<!-- START_86c0dd6f359bad9ecc9205dab5245583 -->
## api/user/update

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/user/update" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/user/update",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/user/update`


<!-- END_86c0dd6f359bad9ecc9205dab5245583 -->

<!-- START_095d848657e852d634cb050a93d16d7f -->
## api/user/update/password

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/user/update/password" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/user/update/password",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/user/update/password`


<!-- END_095d848657e852d634cb050a93d16d7f -->

<!-- START_bfb4dfd7facc819b096f1a999ad6069d -->
## api/user/update/email

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/user/update/email" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/user/update/email",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/user/update/email`


<!-- END_bfb4dfd7facc819b096f1a999ad6069d -->

<!-- START_49fdc80657a446701cec154a775f6439 -->
## api/user/verify/update/email

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/user/verify/update/email" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/user/verify/update/email",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/user/verify/update/email`


<!-- END_49fdc80657a446701cec154a775f6439 -->

<!-- START_9dac0740f5fcc2d88cf68ffbb1dd80d4 -->
## api/user/forgot/password

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/user/forgot/password" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/user/forgot/password",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/user/forgot/password`


<!-- END_9dac0740f5fcc2d88cf68ffbb1dd80d4 -->

<!-- START_2ea88ff35aa222f5582e50f39a2b35fd -->
## api/user

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/user" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/user",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "Unauthenticated."
    }
}
```

### HTTP Request
`GET api/user`

`HEAD api/user`


<!-- END_2ea88ff35aa222f5582e50f39a2b35fd -->

<!-- START_cc60f6924e3b78341fb9ddbfd6a87080 -->
## api/oauth/token

> Example request:

```bash
curl -X DELETE "http://128.199.229.155/api/oauth/token" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/oauth/token",
    "method": "DELETE",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`DELETE api/oauth/token`


<!-- END_cc60f6924e3b78341fb9ddbfd6a87080 -->

<!-- START_90aebe8fdcb5c343fbd16852e5db1293 -->
## api/history

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/history" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/history",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "Unauthenticated."
    }
}
```

### HTTP Request
`GET api/history`

`HEAD api/history`


<!-- END_90aebe8fdcb5c343fbd16852e5db1293 -->

<!-- START_9af3771643d13c3a3460ef80a311e484 -->
## api/history/detail

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/history/detail" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/history/detail",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "Unauthenticated."
    }
}
```

### HTTP Request
`GET api/history/detail`

`HEAD api/history/detail`


<!-- END_9af3771643d13c3a3460ef80a311e484 -->

<!-- START_4e93193bf49af503facd40b9c63faf90 -->
## api/home

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/home" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/home",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "Unauthenticated."
    }
}
```

### HTTP Request
`GET api/home`

`HEAD api/home`


<!-- END_4e93193bf49af503facd40b9c63faf90 -->

<!-- START_29647fe5f8cbd63db83a968273e80ccb -->
## api/currency

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/currency" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/currency",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/currency`


<!-- END_29647fe5f8cbd63db83a968273e80ccb -->

<!-- START_f717da85f6fa5a07938d71e66ae8317b -->
## api/search

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/search" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/search",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "Unauthenticated."
    }
}
```

### HTTP Request
`GET api/search`

`HEAD api/search`


<!-- END_f717da85f6fa5a07938d71e66ae8317b -->

<!-- START_9792377865465dfd12bebd73e7326925 -->
## api/search

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/search" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/search",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/search`


<!-- END_9792377865465dfd12bebd73e7326925 -->

<!-- START_d508919976fb0e317993979b7ef87876 -->
## api/search/autocomplete

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/search/autocomplete" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/search/autocomplete",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "Unauthenticated."
    }
}
```

### HTTP Request
`GET api/search/autocomplete`

`HEAD api/search/autocomplete`


<!-- END_d508919976fb0e317993979b7ef87876 -->

<!-- START_b5cc3bd5450ceab05c21e5ba01751613 -->
## api/search/nearby

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/search/nearby" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/search/nearby",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "file_put_contents(\/var\/www\/html\/traveloop\/storage\/framework\/cache\/data\/05\/72\/05727f2c2cb23710da38949960a79943ccffbe88): failed to open stream: No such file or directory",
        "exception": "ErrorException",
        "trace": [
            {
                "function": "handleError",
                "class": "Illuminate\\Foundation\\Bootstrap\\HandleExceptions",
                "type": "->",
                "args": [
                    2,
                    "file_put_contents(\/var\/www\/html\/traveloop\/storage\/framework\/cache\/data\/05\/72\/05727f2c2cb23710da38949960a79943ccffbe88): failed to open stream: No such file or directory",
                    "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Filesystem\/Filesystem.php",
                    122,
                    {
                        "path": "\/var\/www\/html\/traveloop\/storage\/framework\/cache\/data\/05\/72\/05727f2c2cb23710da38949960a79943ccffbe88",
                        "contents": "1516788622i:0;",
                        "lock": true
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Filesystem\/Filesystem.php",
                "line": 122,
                "function": "file_put_contents",
                "args": [
                    "\/var\/www\/html\/traveloop\/storage\/framework\/cache\/data\/05\/72\/05727f2c2cb23710da38949960a79943ccffbe88",
                    "1516788622i:0;",
                    2
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Cache\/FileStore.php",
                "line": 66,
                "function": "put",
                "class": "Illuminate\\Filesystem\\Filesystem",
                "type": "->",
                "args": [
                    "\/var\/www\/html\/traveloop\/storage\/framework\/cache\/data\/05\/72\/05727f2c2cb23710da38949960a79943ccffbe88",
                    "1516788622i:0;",
                    true
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Cache\/Repository.php",
                "line": 175,
                "function": "put",
                "class": "Illuminate\\Cache\\FileStore",
                "type": "->",
                "args": [
                    "7d069d36c35c1c6442771d86735a2df98e7ed42e",
                    0,
                    "1"
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Cache\/Repository.php",
                "line": 226,
                "function": "put",
                "class": "Illuminate\\Cache\\Repository",
                "type": "->",
                "args": [
                    "7d069d36c35c1c6442771d86735a2df98e7ed42e",
                    0,
                    "1"
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Cache\/RateLimiter.php",
                "line": 76,
                "function": "add",
                "class": "Illuminate\\Cache\\Repository",
                "type": "->",
                "args": [
                    "7d069d36c35c1c6442771d86735a2df98e7ed42e",
                    0,
                    "1"
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Middleware\/ThrottleRequests.php",
                "line": 47,
                "function": "hit",
                "class": "Illuminate\\Cache\\RateLimiter",
                "type": "->",
                "args": [
                    "7d069d36c35c1c6442771d86735a2df98e7ed42e",
                    "1"
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 148,
                "function": "handle",
                "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    },
                    {},
                    "60",
                    "1"
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 53,
                "function": "Illuminate\\Pipeline\\{closure}",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 102,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
                "line": 574,
                "function": "then",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
                "line": 533,
                "function": "runRouteWithinStack",
                "class": "Illuminate\\Routing\\Router",
                "type": "->",
                "args": [
                    {
                        "uri": "api\/search\/nearby",
                        "methods": [
                            "GET",
                            "HEAD"
                        ],
                        "action": {
                            "middleware": [
                                "api",
                                "client_credentials"
                            ],
                            "uses": "App\\Http\\Controllers\\Api\\ActivityController@nearby",
                            "controller": "App\\Http\\Controllers\\Api\\ActivityController@nearby",
                            "namespace": "App\\Http\\Controllers",
                            "prefix": "api\/search",
                            "where": []
                        },
                        "controller": {
                            "adultAge": 20,
                            "childAge": 17,
                            "infantAge": 10,
                            "currency": "IDR",
                            "radius": 50,
                            "expiredBookingTime": 7200,
                            "precision": 0,
                            "locationInfo": null,
                            "request": null,
                            "project": "",
                            "haveVal1": false,
                            "haveVal2": false,
                            "haveCurVal": false,
                            "markup": null,
                            "currVal": null,
                            "discount": null,
                            "tax": null,
                            "charge": null,
                            "promo": 0
                        },
                        "defaults": [],
                        "wheres": [],
                        "parameters": [],
                        "parameterNames": [],
                        "computedMiddleware": [
                            "api",
                            "client_credentials",
                            {}
                        ],
                        "compiled": {}
                    },
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
                "line": 511,
                "function": "dispatchToRoute",
                "class": "Illuminate\\Routing\\Router",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
                "line": 176,
                "function": "dispatch",
                "class": "Illuminate\\Routing\\Router",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 30,
                "function": "Illuminate\\Foundation\\Http\\{closure}",
                "class": "Illuminate\\Foundation\\Http\\Kernel",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
                "line": 30,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 148,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    },
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 53,
                "function": "Illuminate\\Pipeline\\{closure}",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
                "line": 30,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 148,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    },
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 53,
                "function": "Illuminate\\Pipeline\\{closure}",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/ValidatePostSize.php",
                "line": 27,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 148,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    },
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 53,
                "function": "Illuminate\\Pipeline\\{closure}",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/CheckForMaintenanceMode.php",
                "line": 46,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 148,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    },
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
                "line": 53,
                "function": "Illuminate\\Pipeline\\{closure}",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
                "line": 102,
                "function": "Illuminate\\Routing\\{closure}",
                "class": "Illuminate\\Routing\\Pipeline",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
                "line": 151,
                "function": "then",
                "class": "Illuminate\\Pipeline\\Pipeline",
                "type": "->",
                "args": [
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
                "line": 116,
                "function": "sendRequestThroughRouter",
                "class": "Illuminate\\Foundation\\Http\\Kernel",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Mpociot\/ApiDoc\/Generators\/LaravelGenerator.php",
                "line": 116,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Http\\Kernel",
                "type": "->",
                "args": [
                    {
                        "attributes": {},
                        "request": {},
                        "query": {},
                        "server": {},
                        "files": {},
                        "cookies": {},
                        "headers": {}
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Mpociot\/ApiDoc\/Generators\/AbstractGenerator.php",
                "line": 98,
                "function": "callRoute",
                "class": "Mpociot\\ApiDoc\\Generators\\LaravelGenerator",
                "type": "->",
                "args": [
                    "GET",
                    "api\/search\/nearby",
                    [],
                    [],
                    [],
                    {
                        "CONTENT_TYPE": "application\/json",
                        "Accept": "application\/json"
                    }
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Mpociot\/ApiDoc\/Generators\/LaravelGenerator.php",
                "line": 58,
                "function": "getRouteResponse",
                "class": "Mpociot\\ApiDoc\\Generators\\AbstractGenerator",
                "type": "->",
                "args": [
                    {
                        "uri": "api\/search\/nearby",
                        "methods": [
                            "GET",
                            "HEAD"
                        ],
                        "action": {
                            "middleware": [
                                "api",
                                "client_credentials"
                            ],
                            "uses": "App\\Http\\Controllers\\Api\\ActivityController@nearby",
                            "controller": "App\\Http\\Controllers\\Api\\ActivityController@nearby",
                            "namespace": "App\\Http\\Controllers",
                            "prefix": "api\/search",
                            "where": []
                        },
                        "controller": null,
                        "defaults": [],
                        "wheres": [],
                        "parameters": null,
                        "parameterNames": null,
                        "computedMiddleware": null,
                        "compiled": null
                    },
                    [],
                    []
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Mpociot\/ApiDoc\/Commands\/GenerateDocumentation.php",
                "line": 261,
                "function": "processRoute",
                "class": "Mpociot\\ApiDoc\\Generators\\LaravelGenerator",
                "type": "->",
                "args": [
                    {
                        "uri": "api\/search\/nearby",
                        "methods": [
                            "GET",
                            "HEAD"
                        ],
                        "action": {
                            "middleware": [
                                "api",
                                "client_credentials"
                            ],
                            "uses": "App\\Http\\Controllers\\Api\\ActivityController@nearby",
                            "controller": "App\\Http\\Controllers\\Api\\ActivityController@nearby",
                            "namespace": "App\\Http\\Controllers",
                            "prefix": "api\/search",
                            "where": []
                        },
                        "controller": null,
                        "defaults": [],
                        "wheres": [],
                        "parameters": null,
                        "parameterNames": null,
                        "computedMiddleware": null,
                        "compiled": null
                    },
                    [],
                    [],
                    true
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Mpociot\/ApiDoc\/Commands\/GenerateDocumentation.php",
                "line": 83,
                "function": "processLaravelRoutes",
                "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
                "type": "->",
                "args": [
                    {},
                    [],
                    "api\/*",
                    null
                ]
            },
            {
                "function": "handle",
                "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
                "type": "->",
                "args": []
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
                "line": 29,
                "function": "call_user_func_array",
                "args": [
                    [
                        {},
                        "handle"
                    ],
                    []
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
                "line": 87,
                "function": "Illuminate\\Container\\{closure}",
                "class": "Illuminate\\Container\\BoundMethod",
                "type": "::",
                "args": []
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
                "line": 31,
                "function": "callBoundMethod",
                "class": "Illuminate\\Container\\BoundMethod",
                "type": "::",
                "args": [
                    {
                        "contextual": []
                    },
                    [
                        {},
                        "handle"
                    ],
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/Container.php",
                "line": 539,
                "function": "call",
                "class": "Illuminate\\Container\\BoundMethod",
                "type": "::",
                "args": [
                    {
                        "contextual": []
                    },
                    [
                        {},
                        "handle"
                    ],
                    [],
                    null
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
                "line": 182,
                "function": "call",
                "class": "Illuminate\\Container\\Container",
                "type": "->",
                "args": [
                    [
                        {},
                        "handle"
                    ]
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/symfony\/console\/Command\/Command.php",
                "line": 252,
                "function": "execute",
                "class": "Illuminate\\Console\\Command",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
                "line": 167,
                "function": "run",
                "class": "Symfony\\Component\\Console\\Command\\Command",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/symfony\/console\/Application.php",
                "line": 936,
                "function": "run",
                "class": "Illuminate\\Console\\Command",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/symfony\/console\/Application.php",
                "line": 240,
                "function": "doRunCommand",
                "class": "Symfony\\Component\\Console\\Application",
                "type": "->",
                "args": [
                    {},
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/symfony\/console\/Application.php",
                "line": 148,
                "function": "doRun",
                "class": "Symfony\\Component\\Console\\Application",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Console\/Kernel.php",
                "line": 122,
                "function": "run",
                "class": "Symfony\\Component\\Console\\Application",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            },
            {
                "file": "\/var\/www\/html\/traveloop\/artisan",
                "line": 35,
                "function": "handle",
                "class": "Illuminate\\Foundation\\Console\\Kernel",
                "type": "->",
                "args": [
                    {},
                    {}
                ]
            }
        ]
    }
}
```

### HTTP Request
`GET api/search/nearby`

`HEAD api/search/nearby`


<!-- END_b5cc3bd5450ceab05c21e5ba01751613 -->

<!-- START_516523e80495c4349babc8ab93940e1f -->
## api/search/last

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/search/last" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/search/last",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "Unauthenticated."
    }
}
```

### HTTP Request
`GET api/search/last`

`HEAD api/search/last`


<!-- END_516523e80495c4349babc8ab93940e1f -->

<!-- START_1065aa082a84f4a8c208ec4672cef3ec -->
## api/search/favorite/activity

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/search/favorite/activity" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/search/favorite/activity",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "Unauthenticated."
    }
}
```

### HTTP Request
`GET api/search/favorite/activity`

`HEAD api/search/favorite/activity`


<!-- END_1065aa082a84f4a8c208ec4672cef3ec -->

<!-- START_6f03b304be958c3075aa471ceb1f67c6 -->
## api/search/favorite/destination

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/search/favorite/destination" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/search/favorite/destination",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "Unauthenticated."
    }
}
```

### HTTP Request
`GET api/search/favorite/destination`

`HEAD api/search/favorite/destination`


<!-- END_6f03b304be958c3075aa471ceb1f67c6 -->

<!-- START_b3a59161162cd3081b21c54c1ee8c3ab -->
## api/detail

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/detail" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/detail",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "Unauthenticated."
    }
}
```

### HTTP Request
`GET api/detail`

`HEAD api/detail`


<!-- END_b3a59161162cd3081b21c54c1ee8c3ab -->

<!-- START_f32dad09dcdbeaf6bbbf26da757e3d4e -->
## api/detail/modality

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/detail/modality" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/detail/modality",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/detail/modality`


<!-- END_f32dad09dcdbeaf6bbbf26da757e3d4e -->

<!-- START_c637748ffe55fbdf711ffba83620abb9 -->
## api/booking/promo

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/booking/promo" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/booking/promo",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/booking/promo`


<!-- END_c637748ffe55fbdf711ffba83620abb9 -->

<!-- START_0592061f2d093c10ea3be4387adef59a -->
## api/booking

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/booking" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/booking",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/booking`


<!-- END_0592061f2d093c10ea3be4387adef59a -->

<!-- START_cc9781de4f495618fe947072fd3c8789 -->
## api/booking/confirm

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/booking/confirm" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/booking/confirm",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/booking/confirm`


<!-- END_cc9781de4f495618fe947072fd3c8789 -->

<!-- START_6ef6797123dbaa9011b5f0ef531f38e3 -->
## api/booking

> Example request:

```bash
curl -X DELETE "http://128.199.229.155/api/booking" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/booking",
    "method": "DELETE",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`DELETE api/booking`


<!-- END_6ef6797123dbaa9011b5f0ef531f38e3 -->

<!-- START_638687f1aca2f1e69b360d1516c7c1f9 -->
## api/user/register

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/user/register" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/user/register",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/user/register`


<!-- END_638687f1aca2f1e69b360d1516c7c1f9 -->

<!-- START_ac4e95d5011f558677600282197d9ef9 -->
## api/user/register

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/user/register" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/user/register",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "Unauthenticated."
    }
}
```

### HTTP Request
`GET api/user/register`

`HEAD api/user/register`


<!-- END_ac4e95d5011f558677600282197d9ef9 -->

<!-- START_5b70c8d049a0dd74f3967b15c7aa324f -->
## api/user/verification

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/user/verification" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/user/verification",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/user/verification`


<!-- END_5b70c8d049a0dd74f3967b15c7aa324f -->

<!-- START_c1de01bd83f40a39d765ad673884e2d7 -->
## api/user/request/verification

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/user/request/verification" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/user/request/verification",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/user/request/verification`


<!-- END_c1de01bd83f40a39d765ad673884e2d7 -->

<!-- START_08e92c0f5ede115e8b65e11f99c35f3a -->
## api/user/request/forgot/password

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/user/request/forgot/password" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/user/request/forgot/password",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/user/request/forgot/password`


<!-- END_08e92c0f5ede115e8b65e11f99c35f3a -->

<!-- START_deb129964c28500a2815c8b001f0bc2e -->
## api/payment

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/payment" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/payment",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/payment`


<!-- END_deb129964c28500a2815c8b001f0bc2e -->

<!-- START_0847c0657eea29c64225e41ba9f7c7f5 -->
## api/notification

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/notification" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/notification",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "Unauthenticated."
    }
}
```

### HTTP Request
`GET api/notification`

`HEAD api/notification`


<!-- END_0847c0657eea29c64225e41ba9f7c7f5 -->

<!-- START_c844ebe50ac2aedd4974409013667760 -->
## api/notification/{id}

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/notification/{id}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/notification/{id}",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "Unauthenticated."
    }
}
```

### HTTP Request
`GET api/notification/{id}`

`HEAD api/notification/{id}`


<!-- END_c844ebe50ac2aedd4974409013667760 -->

<!-- START_0562646d65b114b170e48c481e9fae96 -->
## api/mandiri/atm/{code}

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/mandiri/atm/{code}" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/mandiri/atm/{code}",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "Sorry, something went wrong.",
        "status": 400,
        "error_msgs": "Unauthenticated."
    }
}
```

### HTTP Request
`GET api/mandiri/atm/{code}`

`HEAD api/mandiri/atm/{code}`


<!-- END_0562646d65b114b170e48c481e9fae96 -->

<!-- START_0c0f372b5e3ce17171ee2738b8a27a06 -->
## api/prismalink/inquiry

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/prismalink/inquiry" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/prismalink/inquiry",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/prismalink/inquiry`


<!-- END_0c0f372b5e3ce17171ee2738b8a27a06 -->

<!-- START_caa20623ba6f31c141c8e9504e7aca07 -->
## api/prismalink/payment

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/prismalink/payment" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/prismalink/payment",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/prismalink/payment`


<!-- END_caa20623ba6f31c141c8e9504e7aca07 -->

<!-- START_5c2f2f52b93f9d5eddcc6402606238e9 -->
## api/mandiri/clickpay

> Example request:

```bash
curl -X POST "http://128.199.229.155/api/mandiri/clickpay" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/mandiri/clickpay",
    "method": "POST",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```


### HTTP Request
`POST api/mandiri/clickpay`


<!-- END_5c2f2f52b93f9d5eddcc6402606238e9 -->

<!-- START_4deec3a4622ef87077464919364c2357 -->
## api/v2/detail

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/v2/detail" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/v2/detail",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "invalid_request",
        "status": 400,
        "error_msgs": {
            "code": [
                "field code (activity code) is required"
            ]
        }
    }
}
```

### HTTP Request
`GET api/v2/detail`

`HEAD api/v2/detail`


<!-- END_4deec3a4622ef87077464919364c2357 -->

<!-- START_99405c3032e1a95f2cf0c6303a2df46c -->
## api/v2/search

> Example request:

```bash
curl -X GET "http://128.199.229.155/api/v2/search" \
-H "Accept: application/json"
```

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://128.199.229.155/api/v2/search",
    "method": "GET",
    "headers": {
        "accept": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

> Example response:

```json
{
    "diagnostic": {
        "error": "invalid_request",
        "status": 400,
        "error_msgs": {
            "q": [
                "The q field is required."
            ]
        }
    }
}
```

### HTTP Request
`GET api/v2/search`

`HEAD api/v2/search`


<!-- END_99405c3032e1a95f2cf0c6303a2df46c -->


<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>徽风堂书画后台</title>
        <meta name="description" content="徽风堂书画后台">
        <meta name="keywords" content="徽风堂书画后台">
        <link rel="stylesheet" href="/resources/vendor/material-design-lite/material.min.css" />
        <style>
            .top-container {
                padding-top: 150px;
                width: 50%;
                position: relative;
                margin: auto;
            }

            .input-area {
                display: block;
                position: relative;
                margin: auto;
            }

            #login-button {
                display: block;
                position: relative;
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
            }

        </style>
    </head>
    <body>
        <div class="top-container">
            <form action="/login" method="post">
                <fieldset>
                    <div class="input-area mdl-textfield mdl-js-textfield">
                        <input class="mdl-textfield__input" id="username" name="username" type="text" autofocus />
                        <label class="mdl-textfield__label" for="username">用户名...</label>
                    </div>
                    <div class="input-area mdl-textfield mdl-js-textfield">
                        <input class="mdl-textfield__input" id="password" name="password" type="password" value="" />
                        <label class="mdl-textfield__label" for="password">密码...</label>
                    </div>
                    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                    <button id="login-button" type="submit" class="mdl-button mdl-js-button mdl-button--raised">
                        登录
                    </button>
                </fieldset>
            </form>
        </div>
    </body>
    <script src="/resources/vendor/material-design-lite/material.min.js"></script>
</html>
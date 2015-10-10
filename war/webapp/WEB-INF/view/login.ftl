<!doctype html>
<html>
    <head>
        <title>Hello World!</title>
    </head>
    <body>
        <form action="/login" method="post">
            <fieldset>
                <div class="form-group">
                    <input class="form-control" id="username" placeholder="E-mail" name="username" type="text"
                           autofocus>
                </div>
                <div class="form-group">
                    <input class="form-control" id="password" placeholder="Password" name="password" type="password"
                           value="">
                </div>
                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                <!-- Change this to a button or input when using this as a form -->
                <button type="submit" class="btn btn-lg btn-success btn-block">Login</button>
            </fieldset>
        </form>
    </body>
</html>
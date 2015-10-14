<header class="mdl-layout__header">
    <div style="overflow:hidden;padding-top:22px">
    <form action="/logout" method="post">
        <button type="submit" class="material-icons" style="float:right;margin-left: 10px;margin-right: 10px;padding: 0;border: 0;outline: 0;background: transparent;color: white;cursor: pointer;">input</button>
        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
    </form>
        <div style="float:right;">${username}</div>
    </div>
</header>
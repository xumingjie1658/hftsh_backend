<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>徽风堂书画后台</title>
    <meta name="description" content="徽风堂书画后台">
    <meta name="keywords" content="徽风堂书画后台">
    <link rel="stylesheet" href="/resources/vendor/material-design-lite/material.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <!-- inject:css -->
    <link rel="stylesheet" href="/resources/assets/system/addUser/system.addUser8b64721c0759e6f550d58ae0b2bdec5c.css">
    <!-- endinject -->

</head>
<body>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
<#include "../common/header.ftl">
<#include "../common/menu.ftl">
    <main class="mdl-layout__content">
        <div class="page-content">
            <div id="app"></div>
        </div>
    </main>
</div>
<div id="csrf-parameterName" style="display:none">${_csrf.parameterName}</div>
<div id="csrf-token" style="display:none">${_csrf.token}</div>
</body>
<script src="/resources/vendor/material-design-lite/material.min.js"></script>
<script src="/resources/vendor/jquery/dist/jquery.min.js"></script>

<!-- inject:js -->
<script src='/resources/assets/system/addUser/system.addUser89fb520a39c75ee9a05e087137e7dea6.js' type='text/javascript'></script>
<!-- endinject -->

</html>
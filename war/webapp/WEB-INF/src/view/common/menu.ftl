 <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">徽风堂书画后台</span>
    <nav class="mdl-navigation">
        <#list menus as m>
            <div class="navigation-item">
                <div class="navigation-item-title">${m.name}</div>
                <#list m.childMenuList as cm>
                    <a class="mdl-navigation__link" href="${cm.path}">${cm.name}</a>
                </#list>
            </div>
        </#list>
    </nav>
</div>

(function(){
  "use strict";
  var PRICES = {
 "updated": "2026-09-28",
 "groups": [
  {
   "name": "OpenAI / Codex",
   "platform": "openai",
   "models": [
    {
     "id": "gpt-5.6-sol",
     "name": "GPT-5.6 Sol",
     "input": 5.0,
     "output": 30.0,
     "cache_read": 0.5
    },
    {
     "id": "gpt-6",
     "name": "GPT-6",
     "input": 10.0,
     "output": 50.0,
     "cache_read": 1.0
    },
    {
     "id": "gpt-5.6",
     "name": "GPT-5.6",
     "input": 5.0,
     "output": 30.0,
     "cache_read": 0.5
    },
    {
     "id": "gpt-5.6-terra",
     "name": "GPT-5.6 Terra",
     "input": 2.0,
     "output": 12.0,
     "cache_read": 0.2
    },
    {
     "id": "gpt-5.6-luna",
     "name": "GPT-5.6 Luna",
     "input": 0.2,
     "output": 1.2,
     "cache_read": 0.02
    },
    {
     "id": "gpt-6-sol",
     "name": "GPT-6 Sol",
     "input": 2.0,
     "output": 10.0,
     "cache_read": 0.2
    },
    {
     "id": "gpt-6-luna",
     "name": "GPT-6 Luna",
     "input": 0.1,
     "output": 0.5,
     "cache_read": 0.01
    },
    {
     "id": "gpt-6-astra",
     "name": "GPT-6 Astra",
     "input": 10.0,
     "output": 50.0,
     "cache_read": 1.0
    },
    {
     "id": "gpt-5.5",
     "name": "GPT-5.5",
     "input": 5.0,
     "output": 30.0,
     "cache_read": 0.5
    },
    {
     "id": "gpt-5.4",
     "name": "GPT-5.4",
     "input": 2.5,
     "output": 15.0,
     "cache_read": 0.25
    },
    {
     "id": "gpt-5.4-mini",
     "name": "GPT-5.4 Mini",
     "input": 0.75,
     "output": 4.5,
     "cache_read": 0.075
    },
    {
     "id": "gpt-5.3-codex-spark",
     "name": "GPT-5.3 Codex Spark",
     "input": 1.75,
     "output": 14.0,
     "cache_read": 0.175
    },
    {
     "id": "codex-auto-review",
     "name": "Codex Auto Review",
     "input": 0.2,
     "output": 1.2,
     "cache_read": 0.02
    },
    {
     "id": "gpt-5.2",
     "name": "GPT-5.2",
     "input": 1.75,
     "output": 14.0,
     "cache_read": 0.175
    },
    {
     "id": "gpt-image-1",
     "name": "GPT Image 1",
     "input": 5.0,
     "output": 0,
     "cache_read": 1.25
    },
    {
     "id": "gpt-image-1.5",
     "name": "GPT Image 1.5",
     "input": 5.0,
     "output": 10.0,
     "cache_read": 1.25
    },
    {
     "id": "gpt-image-2",
     "name": "GPT Image 2",
     "input": 5.0,
     "output": 10.0,
     "cache_read": 1.25
    },
    {
     "id": "gpt-image-2.5-flare",
     "name": "GPT Image 2.5 Flare",
     "input": 5.0,
     "output": 0,
     "cache_read": 1.25
    },
    {
     "id": "gpt-image-2.5-sunburst",
     "name": "GPT Image 2.5 Sunburst",
     "input": 5.0,
     "output": 0,
     "cache_read": 1.25
    }
   ]
  },
  {
   "name": "Claude",
   "platform": "anthropic",
   "models": [
    {
     "id": "claude-fable-5-1",
     "name": "Claude Fable 5.1",
     "input": 10.0,
     "output": 50.0,
     "cache_read": 0.25
    },
    {
     "id": "claude-fable-5",
     "name": "Claude Fable 5",
     "input": 10.0,
     "output": 50.0,
     "cache_read": 1.0
    },
    {
     "id": "claude-opus-4-5-20251101",
     "name": "Claude Opus 4.5",
     "input": 5.0,
     "output": 25.0,
     "cache_read": 0.5
    },
    {
     "id": "claude-opus-4-6",
     "name": "Claude Opus 4.6",
     "input": 5.0,
     "output": 25.0,
     "cache_read": 0.5
    },
    {
     "id": "claude-opus-4-7",
     "name": "Claude Opus 4.7",
     "input": 5.0,
     "output": 25.0,
     "cache_read": 0.5
    },
    {
     "id": "claude-opus-4-8",
     "name": "Claude Opus 4.8",
     "input": 5.0,
     "output": 25.0,
     "cache_read": 0.5
    },
    {
     "id": "claude-opus-5-5",
     "name": "Claude Opus 5.5",
     "input": 4.0,
     "output": 20.0,
     "cache_read": 0.2
    },
    {
     "id": "claude-opus-5",
     "name": "Claude Opus 5",
     "input": 5.0,
     "output": 25.0,
     "cache_read": 0.5
    },
    {
     "id": "claude-sonnet-5",
     "name": "Claude Sonnet 5",
     "input": 2.0,
     "output": 10.0,
     "cache_read": 0.2
    },
    {
     "id": "claude-sonnet-4-6",
     "name": "Claude Sonnet 4.6",
     "input": 3.0,
     "output": 15.0,
     "cache_read": 0.3
    },
    {
     "id": "claude-sonnet-4-5-20250929",
     "name": "Claude Sonnet 4.5",
     "input": 3.0,
     "output": 15.0,
     "cache_read": 0.3
    },
    {
     "id": "claude-haiku-4-5-20251001",
     "name": "Claude Haiku 4.5",
     "input": 1.0,
     "output": 5.0,
     "cache_read": 0.1
    }
   ]
  }
 ]
};
  var PACKAGES = [
    {amt:10, give:0, tag:"", desc:"体验入门，随充随用"},
    {amt:50, give:2, tag:"", desc:"轻度使用，赠 $2 额度"},
    {amt:100, give:8, tag:"推荐", desc:"性价比之选，赠 $8 额度", hot:true},
    {amt:500, give:60, tag:"超值", desc:"重度/团队，赠 $60 额度"}
  ];
  var PLAT_ICON = {openai:"AI", anthropic:"C", google:"G", xai:"X"};

  function esc(s){var d=document.createElement("div");d.textContent=String(s==null?"":s);return d.innerHTML;}
  function fmt(v){
    if(v===0||v===null||v===undefined) return "—";
    var n=Number(v);
    if(n>=1) return n.toFixed(2).replace(/\.?0+$/,"");
    return n.toFixed(3).replace(/0+$/,"").replace(/\.$/,"");
  }

  function buildPricing(){
    var wrap=document.createElement("div");
    wrap.id="ua-pricing";
    var html="";
    html+='<div class="ua-h"><div><h2>完整<span class="g">模型价格表</span></h2>'+
          '<p>统一网关按量计费，价格单位 USD / 每百万 tokens。实际扣费以计费页为准。</p></div>'+
          '<span class="ua-upd">价格更新于 '+esc(PRICES.updated)+'</span></div>';
    PRICES.groups.forEach(function(g){
      var ic=PLAT_ICON[g.platform]||"AI";
      html+='<div class="ua-grp"><div class="ua-grp-h"><span class="ic">'+esc(ic)+'</span>'+
            '<b>'+esc(g.name)+'</b><span>'+g.models.length+' 个模型</span></div>'+
            '<table class="ua-table"><thead><tr>'+
            '<th>模型</th><th class="num">输入</th><th class="num">输出</th>'+
            '<th class="num hide-m">缓存读取</th></tr></thead><tbody>';
      g.models.forEach(function(m){
        html+='<tr><td><span class="ua-mname">'+esc(m.name)+'</span>'+
              '<span class="ua-mid">'+esc(m.id)+'</span></td>'+
              '<td class="num"><span class="ua-price">$'+fmt(m.input)+'</span></td>'+
              '<td class="num"><span class="ua-price">$'+fmt(m.output)+'</span></td>'+
              '<td class="num hide-m"><span class="ua-price">'+(m.cache_read?"$"+fmt(m.cache_read):"—")+'</span></td></tr>';
      });
      html+='</tbody></table></div>';
    });
    html+='<div class="ua-pk-title">充值套餐</div>'+
          '<div class="ua-pk-sub">余额通用于全部模型，充值即时到账，可在控制台查看消耗明细。</div>'+
          '<div class="ua-pk">';
    PACKAGES.forEach(function(p){
      html+='<div class="ua-pk-card'+(p.hot?" hot":"")+'">'+
            (p.tag?'<span class="tag">'+esc(p.tag)+'</span>':'')+
            '<div class="amt"><small>$</small>'+p.amt+'</div>'+
            (p.give?'<div class="give">+ 赠 $'+p.give+'</div>':'<div class="give">&nbsp;</div>')+
            '<div class="desc">'+esc(p.desc)+'</div></div>';
    });
    html+='</div>'+
          '<div class="ua-note">* 套餐赠送额度为示例配置，具体以充值页显示为准。如需开通充值请联系管理员。</div>';
    wrap.innerHTML=html;
    return wrap;
  }

  function buildAffiliate(){
    var wrap=document.createElement("div");
    wrap.id="ua-aff";
    wrap.innerHTML='<div class="ua-hero"><h2>邀请好友，<span class="g">躺赚返利</span></h2>'+
      '<p>分享你的专属邀请码或链接，好友注册并消费后，你将获得其消费额的返利奖励，实时到账，多邀多得。</p>'+
      '<div class="ua-steps">'+
      '<div class="ua-step"><b><i>1</i>获取专属邀请码</b><p>登录后系统自动生成你的专属邀请码与分享链接。</p></div>'+
      '<div class="ua-step"><b><i>2</i>分享给好友</b><p>把链接发给好友，好友注册时自动绑定邀请关系。</p></div>'+
      '<div class="ua-step"><b><i>3</i>获得返利</b><p>好友充值消费后，按比例返还到你的返利余额。</p></div>'+
      '</div></div>';
    return wrap;
  }

  function goHome(e){ if(e){e.preventDefault();e.stopPropagation();} location.href="/home"; }

  function findHeading(text){
    var els=document.querySelectorAll("main h1,main h2,main .text-2xl,main .text-3xl");
    for(var i=0;i<els.length;i++){
      if((els[i].textContent||"").trim().indexOf(text)===0) return els[i];
    }
    return null;
  }

  function enhancePlaza(){
    var main=document.querySelector("main");
    if(!main) return;
    // clickable title -> home
    var h=findHeading("模型广场");
    if(h && !h.dataset.uaLinked){
      h.dataset.uaLinked="1";
      h.classList.add("ua-home-link");
      h.title="返回首页";
      if(!h.querySelector(".ua-back")){
        var b=document.createElement("span");
        b.className="ua-back";b.textContent="← 返回首页";
        h.appendChild(b);
      }
      h.addEventListener("click",goHome);
    }
    // hide redundant native filters + empty placeholder (plaza data is empty)
    try{
      var mainRoot=main.firstElementChild;
      if(mainRoot){
        [].forEach.call(mainRoot.children,function(ch){
          if(ch.id==="ua-pricing") return;
          var t=(ch.textContent||"").trim();
          var isEmpty=/暂无可展示的分组/.test(t);
          var isFilter=ch.querySelector && ch.querySelector('input[type="text"],input:not([type])');
          var isInfo=ch.tagName==="P";
          if(isEmpty||isFilter||isInfo){ ch.setAttribute("data-ua-hide","1"); ch.style.display="none"; }
        });
      }
    }catch(e){}
    // inject pricing panel once
    if(!document.getElementById("ua-pricing")){
      var container=main.firstElementChild||main;
      var panel=buildPricing();
      container.appendChild(panel);
    }
  }

  function enhanceAffiliate(){
    var main=document.querySelector("main");
    if(!main) return;
    if(!document.getElementById("ua-aff")){
      var container=main.firstElementChild||main;
      container.insertBefore(buildAffiliate(), container.firstChild);
    }
  }


  function apply(){
    try{
      var p=location.pathname.replace(/\/+$/,"");
      var isPlaza = /\/model-plaza$/.test(p);
      var isAff = /\/affiliate$/.test(p);
      if(isPlaza||isAff){
        document.body.classList.add("ua-route");
        if(isPlaza) enhancePlaza();
        if(isAff) enhanceAffiliate();
      }else{
        document.body.classList.remove("ua-route");
      }
    }catch(err){ if(window.console) console.warn("ua-enhance",err); }
  }

  // SPA route awareness
  var _ps=history.pushState, _rs=history.replaceState;
  history.pushState=function(){var r=_ps.apply(this,arguments);setTimeout(apply,60);return r;};
  history.replaceState=function(){var r=_rs.apply(this,arguments);setTimeout(apply,60);return r;};
  window.addEventListener("popstate",function(){setTimeout(apply,60);});

  // observe DOM for late Vue renders
  var mo=new MutationObserver(function(){apply();});
  function start(){
    apply();
    mo.observe(document.body,{childList:true,subtree:true});
    var n=0,iv=setInterval(function(){apply();if(++n>40)clearInterval(iv);},250);
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",start);
  else start();
})();
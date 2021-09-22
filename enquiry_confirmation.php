<!doctype html>

<html lang="en">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script>
      (function (i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r;
        (i[r] =
          i[r] ||
          function () {
            (i[r].q = i[r].q || []).push(arguments);
          }),
          (i[r].l = 1 * new Date());
        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(
        window,
        document,
        "script",
        "//www.google-analytics.com/analytics.js",
        "ga"
      );

      ga("create", "UA-190588626-1", "auto");
      ga("send", "pageview");
    </script>

    <!-- Global site tag (gtag.js) - Google Ads: 420037031 -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-420037031"
    ></script>

    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "AW-420037031");
    </script>
    
    <!-- Facebook Pixel Code -->
    <script>
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", "482052489844969");
      fbq("track", "PageView");
    </script>

    <noscript>
      <img height="1" width="1" style="display: none;"
        src="https://www.facebook.com/tr?id=482052489844969&ev=PageView&noscript=1"/>
    </noscript>
    
  <script>
    ga('require', 'ecommerce');
    ga('ecommerce:addTransaction',
    {
      'id': '<?php echo $_GET["enquiry"] ?>',
      'affiliation': '',
      'revenue': '',
      'shipping': '',
      'tax': ''
    });
    
    ga('ecommerce:addItem',
    {
      'id': '<?php echo $_GET["enquiry"] ?>',
      'name': '',
      'sku': '',
      'category': '',
      'price': '',
      'quantity': ''
    });
    ga('ecommerce:send');
  </script>
  <meta charset="utf-8">
  <title>Somaiya School of Design</title>
</head>

<style>
.center{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    flex-direction:column;
}
html, body {
    height: 100%;
}
</style>

<body>
  <div class="center">
    
    <h1>Thank you for contacting us</h1>
    <h3>Our team will shortly get in touch with you.</h3>
    
  </div>
  
  <script>
    fbq('track', 'Lead');
  </script>
</body>
</html>
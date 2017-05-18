<?php
  $redirect_url = "https://wincent.com/blog/synergy-advance-0.5b-seeded-to-beta-testers";
  header("HTTP/1.1 301 Moved Permanently");
  header("Location: $redirect_url");
  print <<<END
<html>
  <head>
    <title>301 Moved Permanently</title>
  </head>
  <body>
    <h1>Moved Permanently</h1>
    <p>The resource has moved to <a href="$redirect_url">$redirect_url</a></p>
  </body>
  <script type="text/javascript">
    window.location.replace('$redirect_url');
  </script>
</html>
END;
?>

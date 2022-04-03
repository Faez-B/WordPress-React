<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
  /**
   * Template Name: Home
   * Template Post Type: page
   */
  $test = (get_field("text") ? get_field("text") : "0");
  $test2 = "texte2";
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-wptheme"
    />
    <link rel="apple-touch-icon" href="<?php echo $TEMPLATE_PATH; ?>/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />
    <!--
        If you're reading this from "view source" in your browser, it might not make sense as
        these tokens have already been evaluated and replaced, even in this remark blurb.

        Notice the use of "php echo $TEMPLATE_PATH;" and %PUBLIC_URL% in the tags above.
        Both will be replaced with the URL of the `public` folder during the build (%PUBLIC_URL%) or
        at render time (php echo $TEMPLATE_PATH;)
        Only files inside the `public` folder can be referenced like this.

        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run wpbuild`.
    -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() ?>/style.css">

    <title>React WordPress Theme</title>
</head>
    <body>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    
    <?php 
      // 1 - On ne peut pas passer un objet dans les props d'un composant en React
      // 2 - Je n'arrive pas à faire passer un array en React (ça me retourne toujours un string)
      // 3 - On peut faire passer un string et le transformer en array par la suite en JS
      // '{"name":"John", "age":30, "city":"New York"}'
      // $params = [];
      // $params[] = $test;
      // $params[] = $test2;
      // var_dump($params);

      $params = "";
      $params .= $test . ", ";
      $params .= $test2;
    ?>

    <!-- Input : Pour les champs ACF  -->
    <!-- <input type="hidden" id="params" data-params='<?php //echo $params; ?>'> -->
    <input type="hidden" id="params" data-params='<?php echo $params; ?>'>
    <div id="root"></div>
    
    <!--
        This PHP file is a template.
        If you open it directly in the browser, you will see an empty page.

        You can add webfonts, meta tags, or analytics to this file.
        The build step will place the bundled scripts into the <body> tag.

        To begin the development, run `npm run wpstart` or `yarn wpstart`.
        To create a production bundle, use `npm run wpbuild` or `yarn wpbuild`.
    -->
    </body>
</html>

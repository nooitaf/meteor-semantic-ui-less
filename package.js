Package.describe({
  summary: "Semantic UI packaged for meteor using less"
});

Package.on_use(function (api) {

  api.use(['jquery','less'],'client');

  var path = Npm.require('path');
  var assetPath = path.join('lib/semantic-ui/build/less/');
  var assetFiles = [
    assetPath + 'collections/breadcrumb.less',
    assetPath + 'collections/form.less',
    assetPath + 'collections/grid.less',
    assetPath + 'collections/menu.less',
    assetPath + 'collections/message.less',
    assetPath + 'collections/table.less',
    assetPath + 'elements/basic.icon.less',
    assetPath + 'elements/button.less',
    assetPath + 'elements/divider.less',
    assetPath + 'elements/header.less',
    assetPath + 'elements/icon.less',
    assetPath + 'elements/image.less',
    assetPath + 'elements/input.less',
    assetPath + 'elements/label.less',
    assetPath + 'elements/loader.less',
    assetPath + 'elements/progress.less',
    assetPath + 'elements/reveal.less',
    assetPath + 'elements/segment.less',
    assetPath + 'elements/step.less',
    assetPath + 'fonts/basic.icons.eot',
    assetPath + 'fonts/basic.icons.svg',
    assetPath + 'fonts/basic.icons.ttf',
    assetPath + 'fonts/basic.icons.woff',
    assetPath + 'fonts/icons.eot',
    assetPath + 'fonts/icons.otf',
    assetPath + 'fonts/icons.svg',
    assetPath + 'fonts/icons.ttf',
    assetPath + 'fonts/icons.woff',
    assetPath + 'images/loader-large-inverted.gif',
    assetPath + 'images/loader-large.gif',
    assetPath + 'images/loader-medium-inverted.gif',
    assetPath + 'images/loader-medium.gif',
    assetPath + 'images/loader-mini-inverted.gif',
    assetPath + 'images/loader-mini.gif',
    assetPath + 'images/loader-small-inverted.gif',
    assetPath + 'images/loader-small.gif',
    assetPath + 'modules/accordion.js',
    assetPath + 'modules/accordion.less',
    assetPath + 'modules/behavior/api.js',
    assetPath + 'modules/behavior/colorize.js',
    assetPath + 'modules/behavior/form.js',
    assetPath + 'modules/behavior/state.js',
    assetPath + 'modules/chatroom.js',
    assetPath + 'modules/chatroom.less',
    assetPath + 'modules/checkbox.js',
    assetPath + 'modules/checkbox.less',
    assetPath + 'modules/dimmer.js',
    assetPath + 'modules/dimmer.less',
    assetPath + 'modules/dropdown.js',
    assetPath + 'modules/dropdown.less',
    assetPath + 'modules/modal.js',
    assetPath + 'modules/modal.less',
    assetPath + 'modules/nag.js',
    assetPath + 'modules/nag.less',
    assetPath + 'modules/popup.js',
    assetPath + 'modules/popup.less',
    assetPath + 'modules/rating.js',
    assetPath + 'modules/rating.less',
    assetPath + 'modules/search.js',
    assetPath + 'modules/search.less',
    assetPath + 'modules/shape.js',
    assetPath + 'modules/shape.less',
    assetPath + 'modules/sidebar.js',
    assetPath + 'modules/sidebar.less',
    assetPath + 'modules/tab.js',
    assetPath + 'modules/tab.less',
    assetPath + 'modules/transition.js',
    assetPath + 'modules/transition.less',
    assetPath + 'modules/video.js',
    assetPath + 'modules/video.less',
    assetPath + 'views/comment.less',
    assetPath + 'views/feed.less',
    assetPath + 'views/item.less',
    assetPath + 'views/list.less',
    assetPath + 'views/statistic.less'
  ];
  api.add_files(assetFiles, 'client');

  api.add_files('lib/fix-asset-paths-for-meteor.less', 'client');

});
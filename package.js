Package.describe({
  name: 'rapito:meteor-twit',
  summary: "Twitter API Client",
  version: '0.1.0',
  git: 'https://github.com/rapito/meteor-twit'
});

Package.describe({
});

Npm.depends({twit: "2.2.2"});

Package.on_use(function (api) {
  if(api.export) {
    api.export('TwitMaker');
  }
  api.add_files("main.js", "server");
});

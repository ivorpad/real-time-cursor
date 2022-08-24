# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin "cursor-channel", to: "https://ga.jspm.io/npm:@anycable/web@0.5.2/index.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "nanoevents", to: "https://ga.jspm.io/npm:nanoevents@6.0.2/index.js"
pin "@rails/actioncable", to: "actioncable.esm.js"
pin_all_from "app/javascript/channels", under: "channels"

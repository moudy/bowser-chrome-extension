const manifest = {
  'name': 'Bowser',
  'externally_connectable': {
    'matches': [
      '*://bowser.com/*'
    ]
  },
  'version': '0.0.1',
  'manifest_version': 2,
  'description': 'Inject',
  'content_scripts': [
    {'js': ['index.js'], 'matches': ['<all_urls>'], 'all_frames':true}
  ],
  'permissions': [
    'activeTab',
    'contextMenus',
  ]
};

module.exports =  manifest;


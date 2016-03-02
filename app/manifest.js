const manifest = {
  'name': 'Bowser',
  'version': '0.0.4',
  'manifest_version': 2,
  'description': 'Layered browsing.',
  'content_scripts': [
    {'js': ['index.js'], 'matches': ['<all_urls>'], 'all_frames':true}
  ],
  'permissions': [
    'activeTab',
    'contextMenus',
  ]
};

module.exports =  manifest;


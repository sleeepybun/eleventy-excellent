// This file creates a dynamic data value for the role text

/**
 * Roles mapping for different page paths
 */

const roles = {
  '/': 'a designer', 
  '/photos/': 'a photographer',
  '/about/': 'a creative thinker',
  '/contact/': 'ready to connect',
  '/blog/': 'a writer',
  default: 'a multi-talented creator'
};

/**
 * Get the current role based on URL
 * @param {string} currentPath - The current page URL path
 * @returns {string} The appropriate role text
 */

const getCurrentrole = (currentPath) => {
  return roles[currentPath] || roles.default;
};

export { roles, getCurrentrole };

// For compatibility with both ESM and CommonJS
export default {
  roles, 
  getCurrentrole
};
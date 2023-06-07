<?php
$settings['trusted_host_patterns'] = [
  '^89\.0\.4\.171$',
  '^osha\.bilbomatica\.es$',
  '^napo\.ddev\.site$',
];

$databases['default']['default'] = [
  'database' => 'napo',
  'username' => 'root',
  'password' => 'root',
  'prefix' => '',
  'host' => 'db',
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
];

$databases['migrate']['default'] = [
  'database' => 'napo_old',
  'username' => 'root',
  'password' => 'root',
  'prefix' => '',
  'host' => 'db',
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
];

// Split configuration.
$config['config_split.config_split.local']['status'] = TRUE;
$config['config_split.config_split.develop']['status'] = FALSE;
$config['config_split.config_split.staging']['status'] = FALSE;
$config['config_split.config_split.production']['status'] = FALSE;


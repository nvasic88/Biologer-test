<?php

return [
    'license_closed_period' => 3,
    'photos_per_observation' => 3,

    'photo_resize_dimension' => (int) env('PHOTO_RESIZE_DIMENSION', null),

    'max_upload_size' => (int) env('MAX_UPLOAD_SIZE', 2048),

    'watermark' => env('WATERMARK_FILE', resource_path('svg/watermark.svg')),

    'territory' => env('MAP_TERRITORY', 'Serbia'),

    'territories' => [
        'Serbia' => [
            'center' => [
                'latitude' => 44.15068115978091,
                'longitude' => 20.7257080078125,
                'zoom' => 7,
            ],
        ],

        'Croatia' => [
            'center' => [
                'latitude' => 45.657371,
                'longitude' => 16.377937,
                'zoom' => 7,
            ],
        ],

        'BiH' => [
            'center' => [
                'latitude' => 43.9110729,
                'longitude' => 17.8,
                'zoom' => 7,
            ],
        ],
    ],

    'android_app_url' => env('ANDROID_APP_URL'),

    'community' => [
        'name' => env('COMMUNITY_NAME'),
        'country' => env('COMMUNITY_COUNTRY'),
        'address' => env('COMMUNITY_ADDRESS'),
    ],

    'srtm_path' => env('SRTM_PATH', resource_path('srtm')),

    'backup_enabled' => (bool) env('BACKUP_ENABLED', false),
    'backup_full' => (bool) env('BACKUP_FULL', false),

    'photos_disk' => env('PHOTOS_DISK', 'public'),

    'taxonomy_status' => env('TAXONOMY_STATUS', false),
    'taxonomy_link' => env('TAXONOMY_LINK', ''),
    'taxonomy_secret_key' => env('TAXONOMY_SECRET_KEY', ''),
];

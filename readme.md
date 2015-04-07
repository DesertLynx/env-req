### Ensures environment variables are set

Usage: 

    const requiredSettings = [
        'PORT',
        'MODE',
    ];

    //Will throw a fatal error in the case that either PORT or MODE are not avilable
    require('env-require')(requiredSettings);

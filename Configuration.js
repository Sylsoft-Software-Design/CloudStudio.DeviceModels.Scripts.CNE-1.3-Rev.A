function getConfiguration(config) {
    // Esta función permite indicar valores de configuración generales para 
    // todos los dispositivos de este modelo.

    // Dependiendo del significado de la "dirección del dispositivo" en este 
    // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
    // para hacer referencia a la dirección en la interfaz de usuario.
    // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
    // MAC, es posible que desee utilizar el código siguiente.

    config.addressLabel = {en: "Serial Number", es: "Número de Serie"};
}

function getEndpoints(deviceAddress, endpoints) {
    // Esta función le permite indicar la configuración inicial de los endpoints
    // cuando se crea un dispositivo de este modelo. Esto mejora significativamente 
    // la experiencia del usuario final, ya que permite a la plataforma crear 
    // todos los endpoints incluidos en el dispositivo automáticamente cuando se 
    // crea el dispositivo.

    // En el código siguiente, se crean dos endpoints. El primero es un sensor de 
    // temperatura, mientras que el segundo es un sensor de dióxido de carbono.

    endpoints.addEndpoint("WHP", "WHP", endpointType.pressureSensor);
    endpoints.addEndpoint("LP", "LP", endpointType.pressureSensor);
    endpoints.addEndpoint("VALVE_STATUS", "VALVE_STATUS", endpointType.genericSensor)
        .variableTypeId = 1026;

    endpoints.addEndpoint("LAST_SHUT_IN_HOUR", "LAST_SHUT_IN_HOUR", endpointType.genericSensor)
        .variableTypeId = 1010;

    endpoints.addEndpoint("SHUT_IN_OPENING_PRE", "SHUT_IN_OPENING_PRE", endpointType.pressureSensor);
    endpoints.addEndpoint("MAINT_CYCLES_OPENING_PRE", "MAINT_CYCLES_OPENING_PRE", endpointType.pressureSensor);
    endpoints.addEndpoint("MAX_PRE_TO_OPEN", "MAX_PRE_TO_OPEN", endpointType.pressureSensor);

    endpoints.addEndpoint("Location", "Location", endpointType.locationTracker);
    
    endpoints.addEndpoint("OPEN_VALVE_TIME_COUNTER", "OPEN_VALVE_TIME_COUNTER", endpointType.genericSensor)
        .variableTypeId = 1010;

    endpoints.addEndpoint("WHT", "WHT", endpointType.temperatureSensor);
    endpoints.addEndpoint("UPSTREAM_PRE", "UPSTREAM_PRE", endpointType.pressureSensor);

    endpoints.addEndpoint("SHUT_IN_MIN_TURNER", "SHUT_IN_MIN_TURNER", endpointType.genericSensor)
        .variableTypeId = 1034;

    endpoints.addEndpoint("MAINT_CYCLES_MIN_TURNER", "MAINT_CYCLES_MIN_TURNER", endpointType.genericSensor)
        .variableTypeId = 1034;

    endpoints.addEndpoint("GAS_FLOW_RATE", "GAS_FLOW_RATE", endpointType.genericSensor)
        .variableTypeId = 1011;

    endpoints.addEndpoint("LIQUID_FLOW_RATE", "LIQUID_FLOW_RATE", endpointType.genericSensor)
        .variableTypeId = 1011;
    
    endpoints.addEndpoint("AI1_CONNECTED", "AI1_CONNECTED", endpointType.genericSensor)
        .variableTypeId = 1006;
    
    endpoints.addEndpoint("AI2_CONNECTED", "AI2_CONNECTED", endpointType.genericSensor)
        .variableTypeId = 1006;

    endpoints.addEndpoint("AI3_CONNECTED", "AI3_CONNECTED", endpointType.genericSensor)
        .variableTypeId = 1006;

    endpoints.addEndpoint("AI4_CONNECTED", "AI4_CONNECTED", endpointType.genericSensor)
        .variableTypeId = 1006;

    endpoints.addEndpoint("SHUT_IN_OPENING_TIME", "SHUT_IN_OPENING_TIME", endpointType.genericSensor)
        .variableTypeId = 1010;
    
    endpoints.addEndpoint("SHUT_IN_CLOSING_TIME", "SHUT_IN_CLOSING_TIME", endpointType.genericSensor)
        .variableTypeId = 1010;
    
    endpoints.addEndpoint("SHUT_IN_MIN_CLOSED_VALVE_TIME", "SHUT_IN_MIN_CLOSED_VALVE_TIME", endpointType.genericSensor)
        .variableTypeId = 1010;
    
    endpoints.addEndpoint("SHUT_IN_MAX_CLOSED_VALVE_TIME", "SHUT_IN_MAX_CLOSED_VALVE_TIME", endpointType.genericSensor)
        .variableTypeId = 1010;
    
    endpoints.addEndpoint("CLOSED_VALVE_TIME_COUNTER", "CLOSED_VALVE_TIME_COUNTER", endpointType.genericSensor)
        .variableTypeId = 1010;

    endpoints.addEndpoint("MAINT_CYCLES_CLOSING_TIME", "MAINT_CYCLES_CLOSING_TIME", endpointType.genericSensor)
        .variableTypeId = 1010;

    endpoints.addEndpoint("MAINT_CYCLES_OPENING_TIME", "MAINT_CYCLES_OPENING_TIME", endpointType.genericSensor)
        .variableTypeId = 1010;

    endpoints.addEndpoint("MAINT_CYCLES_MIN_CLOSED_VALVE_TIME", "MAINT_CYCLES_MIN_CLOSED_VALVE_TIME", endpointType.genericSensor)
        .variableTypeId = 1010;

    endpoints.addEndpoint("MAINT_CYCLES_MAX_CLOSED_VALVE_TIME", "MAINT_CYCLES_MAX_CLOSED_VALVE_TIME", endpointType.genericSensor)
        .variableTypeId = 1010;

    endpoints.addEndpoint("MAINT_CYCLES_MIN_OPEN_VALVE_TIME", "MAINT_CYCLES_MIN_OPEN_VALVE_TIME", endpointType.genericSensor)
        .variableTypeId = 1010;

    endpoints.addEndpoint("MAINT_CYCLES_MAX_OPEN_VALVE_TIME", "MAINT_CYCLES_MAX_OPEN_VALVE_TIME", endpointType.genericSensor)
        .variableTypeId = 1010;

    endpoints.addEndpoint("OPMODE", "OPMODE", endpointType.genericSensor)
        .variableTypeId = 1009;

    endpoints.addEndpoint("SHUT_IN_REP_INTERVAL", "SHUT_IN_REP_INTERVAL", endpointType.genericSensor)
        .variableTypeId = 1010;

    endpoints.addEndpoint("LAST_SHUT_IN_DAY", "LAST_SHUT_IN_DAY", endpointType.genericSensor)
        .variableTypeId = 1028;

    endpoints.addEndpoint("LAST_SHUT_IN_MONTH", "LAST_SHUT_IN_MONTH", endpointType.genericSensor)
        .variableTypeId = 1027;

    endpoints.addEndpoint("MAINT_CYCLES_OPENING_MODE", "MAINT_CYCLES_OPENING_MODE", endpointType.genericSensor)
        .variableTypeId = 1029;

    endpoints.addEndpoint("MAINT_CYCLES_CLOSING_MODE", "MAINT_CYCLES_CLOSING_MODE", endpointType.genericSensor)
        .variableTypeId = 1030;

    endpoints.addEndpoint("SHUT_IN_OPENING_MODE", "SHUT_IN_OPENING_MODE", endpointType.genericSensor)
        .variableTypeId = 1031;

    endpoints.addEndpoint("SHUT_IN_CLOSING_MODE", "SHUT_IN_CLOSING_MODE", endpointType.genericSensor)
        .variableTypeId = 1032;

    endpoints.addEndpoint("FLOW_TYPE", "FLOW_TYPE", endpointType.genericSensor)
        .variableTypeId = 1033;

    endpoints.addEndpoint("FLOW_REGIME", "FLOW_REGIME", endpointType.genericSensor)
        .variableTypeId = 1035;
        
}

function validateDeviceAddress(address, result) {
    // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
    // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
    // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
    // caso de que el formato de la dirección sea incorrecto.

    // En el código siguiente, se realiza una validación para asegurarse de que la 
    // dirección tiene exactamente 10 caracteres.

    // if (address.length != 10) {
    //   result.ok = false;
    //   result.errorMessage = {
    //     en: "The address must be 10 characters long", 
    //     es: "La dirección debe tener exactamente 10 caracteres"
    //   };
    // }
}

function updateDeviceUIRules(device, rules) {
    // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
    // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
    // de endpoints manualmente al dispositivo después de que se creó.

    // En el código siguiente, el agregado manual de endpoints está deshabilitada 
    // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
    // endpoints definidos por la función getEndpoints() anterior.

     rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules) {
    // Esta función permite especificar reglas de interfaz de usuario para cada
    // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
    // eliminación de endpoints, o la edición de subtipo de endpoint.

    // En el código siguiente, se definen las siguientes reglas:
    // - Los endpoints no se pueden eliminar.
    // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.

     rules.canDelete = true;
    // rules.canEditSubType = (endpoint.address == "2");
}

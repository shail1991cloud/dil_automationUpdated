package com.helperUtilities;

import java.util.Map;
import java.util.TreeMap;

/**
 * @author Shailendra PS Parihar
 */
public class EnvSetUp {
    /**
     * @Data_KEYS to set data variables
     */
    public static Map<String, String> DATA_KEYS = new TreeMap<String, String>(String.CASE_INSENSITIVE_ORDER);
    public static boolean IS_ENVIRONMENT_READY;


    public EnvSetUp() {
        if (EnvSetUp.IS_ENVIRONMENT_READY != true) {
            IS_ENVIRONMENT_READY = true;
        }

    }

    /**
     * @param dataKey
     * @param value
     * @return null
     */

    public static void setDataValue(String dataKey, String value) {

        DATA_KEYS.put(dataKey, value);
    }

    /**
     * @param dataKey
     * @return
     */
    public static String getDataKeyValue(String dataKey) {

        if (DATA_KEYS.containsKey(dataKey)) {
            return DATA_KEYS.get(dataKey);
        }
        return dataKey;
    }
}

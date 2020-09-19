export const iTicketSelectGroups = [
    {
        label: 'Data Center',
        type: 'select',
        name: 'dataCenter',
        options: ['NK', 'ST', 'PV', 'MR', 'MS', 'VP2']
    },
    {
        label: 'Vendor',
        type: 'select',
        name: 'vendor',
        options: [
            'Netapp',
            'Isilon',
            'Avere',
            'Mapr',
            'EMC/Dell',
            'Linux/Solaris',
            'SilverPeak',
            'ZFSSA',
            'Brocade',
            'Cisco',
            'Avocent'
        ]
    },
    {
        label: 'Group',
        type: 'select',
        name: 'group',
        options: [
            'Icloud Mail',
            'Icloud',
            'WWW',
            'DSCE',
            'AMP',
            'Game Center',
            'SWU',
            'CSG'
        ]
    },
    {
        label: 'Priority',
        type: 'select',
        name: 'priority',
        options: ['P1', 'P2', 'P3']
    },
    {
        label: 'Escalate',
        type: 'select',
        name: 'escalate',
        options: [
            'IS System Engineering SCV',
            'GIO-IS-Storage',
            'ISG Mail Storage',
            'Eng Ky',
            'Jonathan Aberle',
            'Franck Yelles'
        ]
    },
    {
        label: 'Issue',
        type: 'select',
        name: 'issue',
        options: [
            'Temperature Alert',
            'GPU Failure',
            'Memory Failure',
            'OOB Network Failure',
            'Host Unreachable',
            'In band Network Failure',
            'Power Cycle Device',
            'CR Support Required',
            'Vendor Access Support',
            'Inspect Device',
            'Root Drive Failure',
            'New Build',
            'Decommission',
            'Security Vulnerability',
            'Data Drive Failure',
            'Raid Failure',
            'PXE Failure',
            'BIOS/Firmware Issue',
            'Power Supply Failure'
        ]
    }
];

export const iTicketInputGroups = [
    {
        label: 'System Serial Number',
        type: 'input',
        name: 'systemSerial',
        placeholder: 'Enter System Serial'
    },
    {
        label: 'Host Name',
        type: 'input',
        name: 'hostName',
        placeholder: 'Enter System Hostname'
    },
    {
        label: 'System Location',
        type: 'input',
        name: 'systemLocation',
        placeholder: 'Enter System Location'
    },
    {
        label: 'Asset Tag',
        type: 'input',
        name: 'assetTag',
        placeholder: 'Enter Asset Tag'
    },
    {
        label: 'System RFID',
        type: 'input',
        name: 'systemRFID',
        placeholder: 'Enter System RFID'
    },
    {
        label: 'Ticket Title',
        type: 'input',
        name: 'ticketTitle',
        placeholder: 'Enter Ticket Title'
    }
];

export const defaultDescription = `
========================================================================
    ISSUE OVERVIEW      :    
    CURRENT STATUS      :    
    ACTION NEEDED       :    
    NEXT STEPS          :    Escalate it back to ISG Mail Storage once done
    INFORMATION         :    If you need further information, Please check with isgms@group.apple.com
    LOCATION INFORMATION
    ========================================================================
    
     ++++++++++++++++++ iTrac information ++++++++++++++++++
    Hostname: 
    Hardware serial_number: 
    Hardware asset_tag: 
    Hardware rfid_tag: 
    Hardware manufacture: 
    Hardware asset_user: 
    Hardware product_description: 
    Hardware location_formatted: 
    Hardware location_building: 
    Hardware location_rack: 
    
    APPROVAL TO PROCEED REPAIR OR REPLACE PARTS: (YES/NO)
    PXE BOOT/REKICK:*  (YES/NO)
    SHUTDOWN/REBOOT:*  (YES/NO)
    
    OTHER
    ESCALATE RESOLVED TICKET TO WORKGROUP:  ISG Mail Storage
    JOIN THIS CHAT ROOM FOR ASSISTANCE: isgms@muc.im.apple.com
    RMA REQUIRED/TRACKING #: ????
    REPLACEMENT PART # REQUIRED: ???
    Disk sanitize if applicable: (YES/NO)
    `;

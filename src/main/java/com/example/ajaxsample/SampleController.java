package com.example.ajaxsample;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SampleController {

    @RequestMapping("/")
    public String index() {
        return "main";
    }

    
    @RequestMapping("/submit") // @PostMapping("/submit")でもOK
    @ResponseBody
    public String submit(String note) {
        return note;
    }
}

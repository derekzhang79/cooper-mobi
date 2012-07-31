//
//  InputPickerButton.h
//  Cooper
//
//  Created by sunleepy on 12-7-31.
//  Copyright (c) 2012年 Alibaba. All rights reserved.
//

#import <UIKit/UIKit.h>

@protocol InputPickerDelegate <UITextFieldDelegate>
@optional
- (void)send:(NSString *)value;
@end
@interface InputPickerButton : UIButton
{
    UIToolbar *inputAccessoryView;
    
    UITextField *textField;
}
@property (nonatomic, strong) UIPickerView *picker;
@property (nonatomic, assign) id <InputPickerDelegate> delegate;

@end
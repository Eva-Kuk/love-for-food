import datetime
import simplejson as json


def generate_order_number(pk):
    current_datetime = datetime.datetime.now().strftime('%Y%m%d%H%M%S') #202211092350 + pk
    order_number = current_datetime + str(pk)
    return order_number


def order_total_by_vendor(order, vendor_id):
    total_data = json.loads(order.total_data)
    data = total_data.get(str(vendor_id))
    subtotal = 0
    tax = 0
    tax_dict = {}
    for key, val in data.items():
        subtotal += float(key)
        val = val.replace("'", '"') # value error dictionary has length 1 ; 2 is requires replace single quotation with double
        val = json.loads(val)
        tax_dict.update(val)

        # calculate tax
        # {'Second-Tier-VAT': {'13.50': '2.63'}, 'Third-Tier-VAT': {'9.00': '1.76'}}
        for i in val:
            for j in val[i]:
                tax += float(val[i][j])
    grand_total = float(subtotal) + float(tax)
    context = {
        'subtotal': subtotal,
        'tax_dict': tax_dict,
        'grand_total': grand_total,
    }
            
    return context
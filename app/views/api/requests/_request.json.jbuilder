json.extract! request, *request.attributes.keys
json.sender request.sender
json.sporting_good request.sporting_good
json.start_date request.start_date.strftime("%B %d, %Y")
json.end_date request.end_date.strftime("%B %d, %Y")
